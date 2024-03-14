import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

/***************** Operador takeWhile ********************/
/* es un operador que emite valores del Observable solo mientras una condici�n 
   especificada es verdadera. Una vez que la condici�n se vuelve falsa, 
   takeWhile se completa y deja de emitir valores.
*/

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x,y }) => ({ x,y }) ),
    // takeWhile( ({ y }) => y <= 150)
    takeWhile( ({ y }) => y <= 150, true) // el segundo argumento, es decir, inclusive
                                          // si est� a true quiere decir que el observable 
                                          // va a incluir el valor que no cumple la condici�n
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});