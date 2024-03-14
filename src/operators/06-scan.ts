import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

/***************** Operador scan ********************/
/* es un operador que aplica una función acumuladora a cada 
   valor emitido por un Observable, y devuelve cada resultado intermedio. 
   Es similar al operador reduce, pero en lugar de emitir solo el 
   valor final, scan emite cada valor intermedio.

   scan es útil cuando necesitas mantener un estado 
   acumulativo a lo largo del tiempo, como en un contador o 
   en una lista que se va acumulando.
*/

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// };

// const totalAcumulador = (acc, cur) => acc + cur;

// // Reduce
// from(numbers).pipe(
//     reduce(totalAcumulador, 0)
// )
// .subscribe(console.log);

// // Scan
// from(numbers).pipe(
//     scan(totalAcumulador, 0)
// )
// .subscribe(console.log);

/* Redux:
* es un patron que permite manejar el estado global de la aplicacion 
* en un solo objeto
*/
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },    
    { id: 'fher', autenticado: true, token: 'ABC' },    
    { id: 'fher', autenticado: true, token: 'ABC123' }
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc, cur) => {
         return { ...acc, ...user.reduce((a, b) => ({ ...a, ...b }), {}) }
     }, { edad: 33 })
);


const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);