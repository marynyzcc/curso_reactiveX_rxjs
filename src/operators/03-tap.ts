import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

/***************** Operador tap ********************/
/* Es un operador que se utiliza para realizar efectos secundarios. 
   tap no cambia los valores en el flujo de datos del Observable. 
   Simplemente "espía" los valores, permitiéndote realizar acciones 
   basadas en esos valores, como registrarlos en la consola o realizar 
   algún otro efecto secundario.
 */
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