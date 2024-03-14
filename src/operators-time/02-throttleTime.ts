import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, distinctUntilChanged, pluck } from 'rxjs/operators';

/*********************** throttleTime *****************************/

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