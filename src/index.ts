
import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

/************** Operadores de aplanamiento **************/
/**
 * Los operadores de aplanamiento en RxJS son aquellos que 
 * toman un Observable de alto orden (un Observable que emite Observables) 
 * y lo convierten en un Observable de primer orden (un Observable que emite 
 * valores). Estos operadores son útiles cuando se trabaja con Observables que 
 * emiten Observables
 */


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// input$.pipe(
//     debounceTime(500),
//     map( event => {
//         const texto = event.target['value'];

//         return ajax.getJSON(
//             `https://api.github.com/users/${ texto }`
//         )
//     })
// ).subscribe( resp => {
//     resp.pipe(
//         pluck('url')
//     )
//     .subscribe(console.log);
// });


/******************** mergeAll *********************/
/**
 * mergeAll es un operador de RxJS que se utiliza para aplanar un Observable 
 * de alto orden (un Observable que emite Observables) en un Observable de 
 * primer orden. Esto significa que mergeAll toma los valores emitidos por los 
 * Observables internos y los emite en el Observable resultante.
 */

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll(),
    pluck('items')
).subscribe( resp => {
    console.log(resp);
});
