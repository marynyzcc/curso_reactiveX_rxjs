import { fromEvent, map, merge } from 'rxjs';

/**************************** merge **************************/
/** 
 * merge es una funci�n de RxJS que se utiliza para combinar m�ltiples Observables 
 * en un solo Observable. Esta funci�n suscribe y emite los valores de cada 
 * Observable proporcionado tan pronto como se emiten, independientemente del 
 * orden. El merge no se desuscribe hasta que todos los Observables se completen.
 * En el caso de que los Observables emitan valores a la vez, el que tiene prioridad es el 
 * que se suscribi� primero.
*/

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(map( ev => ev.type)), 
    click$.pipe(map( ev => ev.type))
)
.subscribe(console.log);
