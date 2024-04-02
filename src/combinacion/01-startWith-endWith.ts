import { of, startWith, endWith } from 'rxjs';

/************************ startWith ************************/
/**
 * startWith es un operador de RxJS que permite emitir valores dados antes de 
 * comenzar a emitir los valores de la fuente Observable. La emisi�n de los valores
 * es sincr�nica.
 */
const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe(console.log);


/************************ endWith ************************/
/**
 * endWith es un operador de RxJS que permite emitir valores dados despu�s de que 
 * la fuente Observable haya completado su emisi�n. La emisi�n de los valores
 * es sincr�nica.
 */

const numeros2$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x', 'y', 'z')
);

numeros2$.subscribe(console.log);