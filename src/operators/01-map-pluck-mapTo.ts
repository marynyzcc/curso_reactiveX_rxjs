import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/********* Operador map **********/
/* Mostrar los numeros del 1 al 5 */
// range(1,5).subscribe( console.log );


/* Mostrar los numeros de 10 en 10 */
// range(1,5).pipe(
//     map<number, number>( val => val * 10)
//     map<number, string>( val => (val * 10).toString())
// )
// .subscribe( console.log );

/* Mostrar el codigo de la tecla pulsada */
// const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// const keyupCode$ = keyup$.pipe(
//     map(event => event.code)
// );

// keyupCode$.subscribe( code => console.log('map', code));


/********* Operador pluck **********/
// const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// const keupPluck$ = keyup$.pipe(
//     // pluck('key')
//     pluck('target', 'baseURI') // la coma equivale a la notacion de punto
// );

// keupPluck$.subscribe( code => console.log('pluck', code));


/********* Operador mapTo **********/
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupMapTo$.subscribe( code => console.log('mapTo'));