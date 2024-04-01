
import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from "../interfaces/github-users.interface";

/************** Operadores de aplanamiento **************/
/**
 * Los operadores de aplanamiento en RxJS son aquellos que 
 * toman un Observable de alto orden (un Observable que emite Observables) 
 * y lo convierten en un Observable de primer orden (un Observable que emite 
 * valores). Estos operadores son útiles cuando se trabaja con Observables que 
 * emiten Observables
 */


// Referencias
const url = 'https://api.github.com/search/users';
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);

    orderList.innerHTML = '';

    for(const usuario of usuarios) {
        
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        
        orderList.append(li);
    }    
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// input$.pipe(
//     debounceTime(500),
//     map( event => {
//         const texto = event.target['value'];

//         return ajax.getJSON(
//             `https://api.github.com/users/${ texto }`
//         )
//     })
// ).subscribe( resp => {
//     resp.pipe(
//         pluck('url')
//     )
//     .subscribe(console.log);
// });


/******************** mergeAll *********************/
/**
 * mergeAll es un operador de RxJS que se utiliza para aplanar un Observable 
 * de alto orden (un Observable que emite Observables) en un Observable de 
 * primer orden. Esto significa que mergeAll toma los valores emitidos por los 
 * Observables internos y los emite en el Observable resultante.
 */

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>( event => event.target['value'] ),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
        `${url}?q=${ texto }`
    )),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>( resp => resp.items )
).subscribe( mostrarUsuarios );
