// 1. Verificar vinculación correcta
console.log('Hola mundo');

// Ejercicios de condicionales

/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/

/*
    1. El problema
    2. Analizar
    3. Diseñar
    4. Codificar
*/

/* OPERADORES LÓGICOS 
    - AND (&&)
    - OR (||)
    - NOT (!)
*/

/* CONSTANTES
    let - Variable
    var - Constante
*/

let edad = parseInt (prompt('Por favor ingrese su edad'));
let esCiudadano = confirm ('¿Eres ciudadano colombiano?');

console.log(edad, esCiudadano);

// Condicional  

if (edad >= 18 && esCiudadano==true){
    alert('Eres elegible para votar en la proximas elecciones');
} else {
    alert('No eres elegible para votar');
}