import { catchError, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/**************************** forkJoin *******************************/
/**
 * El caso más común es realizar peticiones ajax de manera simultánea
 */

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'marynyzcc';

forkJoin({
    usuario: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        // `${ GITHUB_API_URL }/${ GITHUB_USER }/repos`
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repo1234s`   //url incorrecto, lo dejamos como test
    )
    .pipe( catchError(err => of([])) ), // Atrapamos el error, dejando que se ejecuten los observables correctos
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )
}).pipe(
    catchError(err => of(err.message))
)
.subscribe(console.log);