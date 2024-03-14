import { Observable, Observer, Subject } from 'rxjs';

/* Un Subject en RxJS es una especie de puente o proxy que actúa tanto 
   como un observador como un observable. Debido a que es un observador, 
   tiene métodos como next(), error(), y complete() directamente disponibles 
   para emitir valores, errores, o la señal de completado.

   Al mismo tiempo, un Subject también es un Observable, por lo que puedes suscribirte a 
   él. A diferencia de los Observable, los Subject son multicasting, lo que significa 
   que pueden tener múltiples observadores.
 */

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( subs => {
    //Crear numeros aleatorios cada segundo

    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    };
});

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));


/**
 * Características del Subject
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(/* rnd => console.log('subs1', rnd) */ observer);
const subs2 = subject$.subscribe(/* rnd => console.log('subs2', rnd) */observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);


