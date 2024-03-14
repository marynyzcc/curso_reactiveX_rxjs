import { fromEvent } from "rxjs";

/* fromEvent es un operador de creación en la biblioteca RxJS. 
   Se utiliza para crear un Observable a partir de eventos del DOM, 
   eventos de EventEmitter, o eventos de otros objetos similares.
 */

/* Eventos del DOM */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

// src1$.subscribe(observer);
/* src1$.subscribe(ev => {   
    console.log(ev.x);
    console.log(ev.y);
}); */

src1$.subscribe(({x,y}) => {    // desestructuracion, como ya sabemos de qué tipo es el evento 
    console.log(x, y);          // en este caso MouseEvent, del objeto que se recibe podemos coger las 
});                             // propiedades que nos interesa, en este caso la propiedad x y la propiedad y.
src2$.subscribe(evento => {
    console.log(evento.key);
});