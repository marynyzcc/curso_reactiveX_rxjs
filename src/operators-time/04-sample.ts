import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';


/*************************** Operador sample *****************************/
/* es un operador que emite el último valor emitido por el observable de origen 
   solo cuando el observable proporcionado emite.

   En otras palabras, sample toma un observable (llamémoslo "observable de 
   notificación") como argumento y mira el observable de origen. Cada vez que 
   el observable de notificación emite un valor, sample emite el último valor 
   que se ha emitido desde el observable de origen
*/

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);