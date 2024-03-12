import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

/***************** Operador tap ********************/
const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100; // en el tap, el return no hace nada, esto es solo un ejemplo para verlo
    }),
    map( val => val * 10 ),
    // tap( x => console.log("despues", x) )
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se termino todo')
    })
    
)
.subscribe( val => console.log("subs", val));