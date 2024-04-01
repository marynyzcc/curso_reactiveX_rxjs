import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

/************************** diferencia entre mergeMap y switchMap ******************************/
/**
 * switchMap: Al igual que mergeMap, switchMap proyecta valores en observables 
 * internos y se suscribe a ellos. Sin embargo, a diferencia de mergeMap, 
 * switchMap se deshará de la suscripción al observable interno anterior tan 
 * pronto como llegue un nuevo valor del observable fuente. Esto significa que 
 * siempre se mantiene a la escucha del observable interno más reciente y se 
 * ignora cualquier emisión de observables anteriores.
 * En resumen, mergeMap es útil cuando quieres manejar múltiples observables 
 * internos al mismo tiempo, mientras que switchMap es útil cuando solo te 
 * interesa el observable interno más reciente.
 */

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$.pipe(
    switchMap( () => interval$ )
    // mergeMap( () => interval$ )
)
.subscribe( console.log );