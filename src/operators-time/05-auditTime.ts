import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';


/*************************** Operador auditTime *****************************/
/* es un operador que ignora los valores del observable de origen durante un 
   per�odo de tiempo determinado, pero emite el �ltimo valor emitido por el 
   observable de origen al final de ese per�odo.

   El operador auditTime toma un argumento num�rico que representa el tiempo 
   (en milisegundos) durante el cual se deben ignorar los valores emitidos por el 
   observable de origen. Una vez transcurrido ese tiempo, auditTime emite el �ltimo 
   valor que se ha emitido desde el observable de origen.
*/

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x }) => x),
    tap(val => console.log('tap', val)),
    auditTime(5000)
).subscribe(console.log);