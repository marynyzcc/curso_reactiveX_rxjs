
import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";
import { ajax } from "rxjs/ajax";

/******************************************* MergeMap ****************************************/
/**
 * mergeMap es un operador de RxJS que se utiliza para mapear cada valor emitido por 
 * el Observable de origen a un Observable interno, y luego aplanar esos Observables 
 * internos en un solo Observable de salida.
 * El operador mergeMap es una combinación de los operadores map y mergeAll. 
 * Primero, map se utiliza para transformar cada valor emitido en un Observable, 
 * y luego mergeAll se utiliza para aplanar los Observables resultantes en un solo Observable.
 */


const letras$ = of('a', 'b', 'c');

letras$
.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))   
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });

const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log);

/***************************************************************************/

// Otro ejemplo

// Referencias
const url = 'https://httpbin.org/delay/1?arg=';
const body = document.querySelector('body');
const textInput = document.createElement('input');

body.append(textInput);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    map<KeyboardEvent, string>( event => event.target['value'] ),
    mergeMap( texto => ajax.getJSON( url + texto))
)
.subscribe( console.log );