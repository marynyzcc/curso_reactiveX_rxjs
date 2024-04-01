import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";

/************************** exhaustMap ******************************/
/** exhaustMap es un operador de alto orden de RxJS que se utiliza para mapear 
 * cada valor del observable fuente a un observable interno, y luego aplanar estos 
 * observables internos en un único observable de salida.
 * La característica única de exhaustMap es que ignora los nuevos observables 
 * internos si el observable interno anterior aún no se ha completado. En otras 
 * palabras, exhaustMap "agota" cada observable interno antes de pasar al siguiente.
 */

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe(console.log);