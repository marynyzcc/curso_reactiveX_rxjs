import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( subscriber => {
    //Crear un contador: 1,2,3,4,5,...
    
    let count: number = 0;
    
    const interval = setInterval(() => {
        //cada segundo
        count++;
        subscriber.next(count);
        console.log(count);

    }, 1000);

    return () => {  // al hacer el return lo que hacemos es realizar la limpieza del observable setInterval()
        clearInterval(interval);    
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(/*num => console.log('Num: ', num)*/);
const subs2 = intervalo$.subscribe(/*num => console.log('Num: ', num)*/);
const subs3 = intervalo$.subscribe(/*num => console.log('Num: ', num)*/);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado timeout');
}, 3000);