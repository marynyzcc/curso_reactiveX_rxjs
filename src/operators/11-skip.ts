import { fromEvent, interval } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";


/***************** Operador skip ********************/
/* es un operador que omite las primeras n emisiones de un 
   Observable y luego emite los valores subsiguientes.

   Es útil cuando quieres ignorar las primeras n emisiones 
   de un Observable.
 */

/* Se quiere detener el counter$ si se pulsa el boton 2 veces */

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despues de skip'))
)

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),  
    complete: () => console.log('complete')
});


