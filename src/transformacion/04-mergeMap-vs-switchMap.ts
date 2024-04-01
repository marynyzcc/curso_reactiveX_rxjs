import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

/************************** diferencia entre mergeMap y switchMap ******************************/
/**
 * switchMap: Al igual que mergeMap, switchMap proyecta valores en observables 
 * internos y se suscribe a ellos. Sin embargo, a diferencia de mergeMap, 
 * switchMap se deshar� de la suscripci�n al observable interno anterior tan 
 * pronto como llegue un nuevo valor del observable fuente. Esto significa que 
 * siempre se mantiene a la escucha del observable interno m�s reciente y se 
 * ignora cualquier emisi�n de observables anteriores.
 * En resumen, mergeMap es �til cuando quieres manejar m�ltiples observables 
 * internos al mismo tiempo, mientras que switchMap es �til cuando solo te 
 * interesa el observable interno m�s reciente.
 */

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$.pipe(
    switchMap( () => interval$ )
    // mergeMap( () => interval$ )
)
.subscribe( console.log );