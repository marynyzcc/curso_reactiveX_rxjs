import { concatMap, fromEvent, interval, take } from "rxjs";

/************************** concatMap ******************************/
/** concatMap es un operador de alto orden en RxJS que se utiliza para manejar 
 * observables internos (observables que se crean durante el procesamiento de otro 
 * observable).
 * Cuando se recibe un valor del observable fuente, concatMap proyecta ese valor 
 * en un nuevo observable y se suscribe a él. Sin embargo, a diferencia de mergeMap 
 * y switchMap, concatMap no se suscribe al siguiente observable interno hasta que el observable interno actual se complete.
 * Esto significa que concatMap preserva el orden de los valores emitidos. Si el 
 * observable fuente emite valores más rápido de lo que los observables internos 
 * pueden completarse, concatMap encolará los observables internos y los manejará 
 * uno por uno.
 */

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap( () => interval$ )
)
.subscribe(console.log);