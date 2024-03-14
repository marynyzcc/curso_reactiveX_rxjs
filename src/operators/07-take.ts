import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/***************** Operador take ********************/
/* es un operador que solo toma las primeras n emisiones del 
   Observable y luego se completa. Es útil cuando solo te 
   interesan las primeras n emisiones de un Observable.
 */
const numeros$ = of(1, 2, 3, 4, 5)
    .pipe( tap(console.log) );

numeros$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
