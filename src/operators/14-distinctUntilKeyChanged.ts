import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";


/***************** Operador distinctUntilKeyChanged ********************/
/* Este operador deja pasar los valores por el observable si la emisión anterior no es la misma */

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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);