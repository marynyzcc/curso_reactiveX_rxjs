import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";


/***************** Operador distinctUntilKeyChanged ********************/
/* es un operador que solo emite cuando el valor de una propiedad 
   específica ha cambiado.

   Este operador es similar a distinctUntilChanged, pero opera en base a 
   una clave proporcionada.
   Es útil cuando se trabaja con flujos de objetos y solo se desea emitir cuando 
   cambia el valor de una propiedad específica de esos objetos.
 */

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