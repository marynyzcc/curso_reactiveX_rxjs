import { asyncScheduler } from "rxjs";


// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

/* Las dos instrucciones anteriores, se pueden realizar con el asyncScheduler */

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

/* realizar setTimeout con asyncScheduler */
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Jane');

/******************************************************/


/* realizar setInterval con asyncScheduler */
/** En este caso, la funcion que se pasa no puede ser una funcion 
 * de flecha ( () => {} )
 */
const subs = asyncScheduler.schedule(function(state) {
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);    //ejecutar después de 3 segundos

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

/* Otra forma de cancelar la subscripcion */
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);