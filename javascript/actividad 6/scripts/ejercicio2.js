console.log('Hola mundo 2');
// Ejercicios de condicionales

/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 

    1. Descuento 20%
    2. Descuento 50%
    3. Descuento 70%

*/

const precioOriginal = parseFloat(prompt('Ingrese el valor base del producto'));
const descuento = prompt('Defina el descuento que quiera aplicar: \n 1. Descuento del 20% \n 2. Descuento del 50% \n 3. Descuento del 70%');

let precioFinal = 0;

switch (descuento){
    case '1':
        precioFinal = precioOriginal - (precioOriginal*0.2);
        alert ('El precio final despues del descuento es de: ' + precioFinal);
        break;
    case '2':
        precioFinal = precioOriginal - (precioOriginal*0.5);
        alert ('El precio final despues del descuento es de: ' + precioFinal);
        break;
    case '1':
        precioFinal = precioOriginal - (precioOriginal*0.7);
        alert ('El precio final despues del descuento es de: ' + precioFinal);
        break;
    default :

}
