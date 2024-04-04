import { of, interval, forkJoin, take, delay } from 'rxjs';

/**************************** forkJoin *******************************/
/**
 * forkJoin es un operador de RxJS que se utiliza para manejar Observables múltiples.
 * Cuando se le pasan varios Observables, forkJoin espera hasta que todos los 
 * Observables completan y luego emite los ÚLTIMOS VALORES EMITIDOS por cada uno 
 * de ellos en un array. Es similar a Promise.all en JavaScript para las Promesas.
 */

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));    // emitirá 0, 1, 2
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$    
// ).subscribe(console.log);


// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$    
// ).subscribe( resp => {
//     console.log('numeros:', resp[0]);
//     console.log('intervalo:', resp[1]);
//     console.log('letras:', resp[2]);
// });


// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$ 
// }).subscribe( resp => console.log(resp));


forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$ 
}).subscribe( resp => console.log(resp));