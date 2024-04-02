import { interval, concat, take, of } from 'rxjs';


/**************************** concat **************************/
/**
 * concat es una función de RxJS que se utiliza para concatenar múltiples 
 * Observables. Esta función suscribe y emite los valores de cada Observable 
 * proporcionado uno tras otro, en el orden en que se pasaron. No se suscribe 
 * al siguiente Observable hasta que el Observable actual se completa.
 */

const interval$ = interval(1000);
concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    // [1,2,3,4]
    of(1)
).subscribe(console.log);