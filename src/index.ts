import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

/***************** Operador filter ********************/
// range(1,10).pipe(
//     filter( (val, i) => { 
//         console.log("index: ", i)
//         return val % 2 === 1
//     })
// )
// .subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "Robin"
    },
    {
        tipo: "villano",
        nombre: "Joker"
    }
];

from( personajes ).pipe(
    filter( p => {    
        return p.tipo === "heroe"
    })

).subscribe( console.log )