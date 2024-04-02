import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

/******** Ejercicio de comparación entre el mergeMap, switchMap y exhaustMap *********/

// Servicio API para hacer pruebas: https://reqres.in/      usar el de POST: LOGIN - SUCCESSFUL

// Helper
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        map( resp => resp.response['token']),
        catchError( err => of('xxx') )
    );

// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'pistol';

submitBtn.innerHTML = 'Submit';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap( ev => ev.preventDefault() ), // preventDefault previene el comportamiento por defecto del formulario
        map( ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value    
        })),
        // mergeMap( peticionHttpLogin ) // equivale a poner mergeMap( userPass => peticionHttpLogin(userPass) )
        // switchMap( peticionHttpLogin )
        exhaustMap( peticionHttpLogin )
    );

submitForm$.subscribe( token => {
    console.log(token);
} );                        