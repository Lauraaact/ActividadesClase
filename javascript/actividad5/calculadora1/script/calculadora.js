//1. Verificar vinvulación
console.log('Hola')

//2. Traer elementos del html
//Declarando variables
let numero1;
let numero2;
let pantalla; 

//asignarle a mis variables los elementod de html
numero1 = document.getElementById('numero1').value;
numero2 = document.getElementById('numero2').value;
pantalla = document.getElementById('pantalla');

console.log('el elemento 1 es: ' + numero1,numero1);

function suma(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;

    let resultadoSuma = parseInt('numero1') + parseInt('numero2');
    pantalla.textContent = resultadoSuma;
}