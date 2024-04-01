import { ajax } from 'rxjs/ajax';

const url =  'https://httpbin.org/delay/1'; 

/* Metodos GET, POST, PUT, DELETE */

// ajax.get(url, {});

// ajax.post(url, {
//     id: 1,
//     nombre: 'Jane'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// ajax.put(url, {
//     id: 1,
//     nombre: 'Jane'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// ajax.delete(url, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);



/* Otra forma de realizar peticiones */

ajax({
    url: url, 
    method: 'POST', // se puede poner GET, PUT, POST o DELETE
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Jane'
    }
}).subscribe(console.log);
