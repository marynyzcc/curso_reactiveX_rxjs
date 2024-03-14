import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, distinctUntilChanged, pluck } from 'rxjs/operators';

/*********************** throttleTime *****************************/
/* El operador que limita la frecuencia de emisión de valores de un observable.
   Cuando se emite un valor desde el observable de origen, throttleTime emitirá 
   ese valor y luego ignorará los valores subsiguientes durante un período de 
   tiempo especificado. Una vez transcurrido ese tiempo, el siguiente valor 
   emitido se emitirá y se iniciará un nuevo período de tiempo.
*/
const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(3000)
// )
// .subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<InputEvent>(input, 'keyup');

// input$.pipe(
//     throttleTime(1000),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// )
// .subscribe(console.log);

/* Detectar cuando se ha escrito la primera y ultima tecla */
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,  // si está a false, equival a usar debounceTime
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);