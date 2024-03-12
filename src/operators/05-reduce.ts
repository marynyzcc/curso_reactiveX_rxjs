import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/***************** Operador reduce ********************/
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

interval(500).pipe(
    take(6),    // take(3),
    tap(console.log),
    reduce(totalReducer) // reduce(totalReducer, 5)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});