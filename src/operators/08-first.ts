import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

/***************** Operador first ********************/
/* es un operador que solo toma la primera emisi�n del Observable 
   que satisface una condici�n, y luego se completa. Si no se 
   proporciona ninguna condici�n, simplemente toma la primera emisi�n.

   Es �til cuando solo te interesa la primera emisi�n que satisface 
   una condici�n espec�fica.
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

// click$.pipe(
//     first() // equivale a take(1)
    
// )
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });


// click$.pipe(
//     tap(() => console.log('tap')),
//     first<MouseEvent>(event => event.clientY >= 150)
// )
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });


click$.pipe(
    tap<MouseEvent>(console.log),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) )
    map( ({clientX, clientY}) => ({ clientY, clientX }) ),
    first(event =>  event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});