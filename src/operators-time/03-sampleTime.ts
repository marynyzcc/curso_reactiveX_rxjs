import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

/*********************** sampleTime *****************************/
/* Este operador emite el �ltimo valor emitido por el Observable de origen dentro 
   de intervalos de tiempo peri�dicos.
   Cuando se utiliza sampleTime, se especifica un per�odo de tiempo. El operador 
   observar� el observable de origen y, en cada intervalo de tiempo, emitir� el 
   �ltimo valor que se ha emitido desde el observable de origen durante ese intervalo.
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y})) 
).subscribe(console.log);