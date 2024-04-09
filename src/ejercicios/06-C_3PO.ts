import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   C-3PO, llamando el endpoint:   /people/2/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 {name: "Droid", classification: "artificial", designation: "sentient", average_height: "n/a", skin_colors: "n/a",... }
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Droid", classification: "artificial", designation: "sentient", average_height: "n/a", skin_colors: "n/a",... }
    personaje: {name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", ...}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a C-3PO
    getRequest(`${SW_API}/people/2`).pipe(
        // Realizar los operadores respectivos aquí
        // switchMap(resp => getRequest(resp.species[0]))

        // Solucion con mayor dificultad
        switchMap( resp => zip(of(resp), getRequest(resp.species[0]))),
        map( ([personaje, especie]) => ({especie, personaje}))   
             
    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log )           // ==
    // =======================================



})();

		
