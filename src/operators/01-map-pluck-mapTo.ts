import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/********* Operador map **********/
/* es un operador que transforma los valores emitidos por un 
   Observable aplicando una función a cada valor. La función de 
   transformación se aplica a cada valor emitido por el Observable de 
   origen, y el resultado de esa función se emite como un Observable.
 */

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
/* Es un operador que extrae una propiedad específica de cada 
   objeto emitido por el Observable de origen y emite esos valores.
   Es útil cuando tienes un Observable que emite objetos y solo estás 
   interesado en ciertas propiedades de esos objetos.
 */

// const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// const keupPluck$ = keyup$.pipe(
//     // pluck('key')
//     pluck('target', 'baseURI') // la coma equivale a la notacion de punto
// );

// keupPluck$.subscribe( code => console.log('pluck', code));


/********* Operador mapTo **********/
/* Es un operador que transforma los valores emitidos por un Observable 
   a un valor constante. Cada vez que el Observable de origen emite un valor, 
   mapTo emite el valor constante que le proporcionaste.
 */

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupMapTo$.subscribe( code => console.log('mapTo'));