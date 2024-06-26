import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';


// Servicio API para hacer pruebas: https://reqres.in/      usar el de POST: LOGIN - SUCCESSFUL


// Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';


const body = document.querySelector('body');

// Streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe( resp => {
    if(resp === true) {
        body.append(loadingDiv);
    }
    else {
        document.querySelector('.loading').remove();
    }
    console.log(resp);
});
