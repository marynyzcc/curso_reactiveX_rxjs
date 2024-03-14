import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';


/*************************** Operador sample *****************************/
/* es un operador que emite el �ltimo valor emitido por el observable de origen 
   solo cuando el observable proporcionado emite.

   En otras palabras, sample toma un observable (llam�moslo "observable de 
   notificaci�n") como argumento y mira el observable de origen. Cada vez que 
   el observable de notificaci�n emite un valor, sample emite el �ltimo valor 
   que se ha emitido desde el observable de origen
*/

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);