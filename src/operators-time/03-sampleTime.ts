import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

/*********************** sampleTime *****************************/
/* Este operador emite el último valor emitido por el Observable de origen dentro 
   de intervalos de tiempo periódicos.
   Cuando se utiliza sampleTime, se especifica un período de tiempo. El operador 
   observará el observable de origen y, en cada intervalo de tiempo, emitirá el 
   último valor que se ha emitido desde el observable de origen durante ese intervalo.
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y})) 
).subscribe(console.log);