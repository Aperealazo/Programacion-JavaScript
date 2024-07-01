//* Alcance de variable en js

let variableGlobal =5;

//Modificar el valor
variableGlobal=10;

//Definicion en una funcion
function miFuncion(variableLocal){
    console.log(variableLocal);
    variableGlobal=60;

}
//Llamamos la funcion
miFuncion(variableGlobal);
console.log(variableGlobal);