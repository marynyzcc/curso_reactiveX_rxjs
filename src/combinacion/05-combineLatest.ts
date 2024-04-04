import { fromEvent, map, combineLatest } from 'rxjs';

/**************************** combineLatest *******************************/
/**
 * combineLatest es una función de RxJS que se utiliza para combinar múltiples 
 * Observables en un solo Observable. Esta función suscribe y emite los valores 
 * de cada Observable proporcionado tan pronto como todos los Observables han 
 * emitido AL MENOS UNA VEZ y luego cada vez que cualquiera de los Observables 
 * emite un valor se combinan con el ultimo valor de cada Observable.
 * La desusbricion de combineLatest se realiza cuando todos los Observables se
 * han completado.
 */

// Ejemplo 1
// const keyup$ = fromEvent(document, 'keyup').pipe(map( ev => ev.type));
// const click$ = fromEvent(document, 'click').pipe(map( ev => ev.type));

// combineLatest([keyup$, click$]).subscribe(console.log);


// Ejemplo 2
const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***************';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = ( elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(event => event.target['value'])
    );
}

combineLatest([getInputStream(input1), getInputStream(input2)]).subscribe(console.log);