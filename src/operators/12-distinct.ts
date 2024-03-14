import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";


/***************** Operador distinct ********************/
/* Este operador deja pasar los valores que todavía no ha sido emitido por el observable */

const numeros$ = of(1, 1, 1, '1', 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numeros$.pipe(
    distinct()  // la comprobacion la realiza con ===
).subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' }    
];

from(personajes).pipe(
    distinct( p => p.nombre)
)
.subscribe(console.log);