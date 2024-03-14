import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";


/***************** Operador distinct ********************/
/* Este operador deja pasar los valores por el observable si la emisi�n anterior no es la misma */

const numeros$ = of(1, '1', 1,  3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numeros$.pipe(
    distinctUntilChanged() // la comprobacion la realiza con ===
).subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Zero' }    
];

from(personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
)
.subscribe(console.log);