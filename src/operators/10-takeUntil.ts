import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";


/***************** Operador takeUntil ********************/
/* es un operador que emite los valores emitidos por un Observable 
   hasta que otro Observable emite un valor. En ese momento, 
   takeUntil se completa y deja de emitir valores.

    Es útil cuando necesitas tomar valores de un Observable 
    hasta que se produce un evento específico, que es señalado 
    por la emisión de otro Observable.
 */
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

const counter$ = interval(1000);
const clickBtn$ = fromEvent( boton, 'click' );

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),  
    complete: () => console.log('complete')
});
