//Cadenas y funciones en JS
//Cadenas inmutables en JS (NO SE PUEDEN MODIFICAR )

//! Llamamos a la funcion 
let argumento ="Hola Sexto Año"

function cambiarValor (parametro){
    parametro='Hola Quinto año'
}

console.log(`Antes de pasar la funcion: ${argumento}`);
cambiarValor(argumento)
console.log(`Despues de pasar la funcion: ${argumento}`);