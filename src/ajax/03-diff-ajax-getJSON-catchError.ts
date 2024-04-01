import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

/******* Diferencia entre getJSON y ajax ********/
/**
 * getJSON: es un metodo de rxjs que nos permite hacer peticiones http y obtener la respuesta en formato JSON
 * ajax: es un metodo de rxjs que nos permite hacer peticiones http y obtener la respuesta en formato JSON, ademas de tener mas opciones para configurar la peticion
 */

const url =  'https://httpbinxx.org/delay/1'; //'https://httpbin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

const obs$ = ajax.getJSON( url ).pipe(
    catchError(manejaError)
);

const obs2$ = ajax( url ).pipe(
    catchError(manejaError)
);

// obs$.subscribe( data => console.log('getJSON:', data));
// obs2$.subscribe( data => console.log('ajax:', data));


// Otra forma de manejar el error
const obs3$ = ajax.getJSON( url );

obs3$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete'),
});

// Otra forma de manejar el error
const obs4$ = ajax.getJSON( url );

obs4$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete'),
});