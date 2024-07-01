//Imprimir desde el numero 1  al 10
function funcionRecursiva(numero,limite){
//imprimimos el numero actual
console.log(numero);

// caso base 
if(numero < limite)
    funcionRecursiva(numero +1, limite)

}
funcionRecursiva(1,10)