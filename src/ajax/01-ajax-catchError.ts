import { map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

/************************* Fetch API ***************************/
/**
 * El fetch API es una interfaz moderna para realizar peticiones HTTP que nos permite realizar peticiones AJAX de forma sencilla.
 *  - Es una API basada en promesas
 *  - Es una API que no es bloqueante, es decir, no detiene la ejecución del código mientras se realiza la petición.
 */

const url = 'https://api.github.com/usersXXX?per_page=5'; //'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en usuarios', err)); // para que el catch atrape el error, hay que implementar el throw, 
                                                           // es lo que hacemos con la promesa manejaErrores


/******************************* catchError **************************************/
/**
 * catchError: Operador que captura un error en el observable y lo maneja de la 
 * forma que se desee, tiene que devolver un error o un observable.
 */
ajax( url )
.pipe(    
    pluck('response'),   // map(resp => resp.response)
    catchError( atrapaError )
)
.subscribe(users => console.log('usuarios: ', users));