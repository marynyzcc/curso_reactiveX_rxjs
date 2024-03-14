import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

/*********************** debounceTime *****************************/
/* Retrasa los valores emitidos por el observable de origen hasta que pasa un 
   cierto período de tiempo sin que se emita otro valor.
   En otras palabras, debounceTime espera hasta que haya una pausa en la emisión 
   de valores que dure al menos el tiempo especificado. Cuando se produce esa pausa, 
   debounceTime emite el último valor que se ha emitido.
 */

const click$ = fromEvent(document, 'click');

// click$.pipe(
//     debounceTime(3000)
// )
// .subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<InputEvent>(input, 'keyup');

input$.pipe(
    // map(({target}) => ({value: (target as HTMLInputElement).value }))
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);