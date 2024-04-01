import { switchMap, fromEvent, map } from 'rxjs';
import { ajax } from "rxjs/ajax";

/****************************** switchMap ************************************/
/**
 * switchMap es un operador de RxJS que se utiliza para mapear cada valor emitido 
 * por el Observable de origen a un Observable interno, y luego emitir los valores 
 * del Observable interno más reciente.
 * 
 * El operador switchMap es útil cuando cada valor emitido por el Observable de 
 * origen puede mapearse a un Observable interno, pero sólo te interesa recibir los 
 * valores del Observable interno más reciente. Cuando se emite un nuevo Observable 
 * interno, switchMap se desuscribe del Observable interno anterior.
 */

// Referencias
const url = 'https://httpbin.org/delay/1?arg=';
const body = document.querySelector('body');
const textInput = document.createElement('input');

body.append(textInput);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    map<KeyboardEvent, string>( event => event.target['value'] ),
    switchMap( texto => ajax.getJSON( url + texto))
)
.subscribe( console.log );