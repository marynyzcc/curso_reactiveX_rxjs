import { fromEvent } from "rxjs";
import { debounceTime, distinct, distinctUntilChanged, map, pluck } from 'rxjs/operators';

/*********************** debounceTime *****************************/

const click$ = fromEvent(document, 'click');

// click$.pipe(
//     debounceTime(3000)
// )
// .subscribe(console.log);


click$.pipe(
    debounceTime(3000)
);

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