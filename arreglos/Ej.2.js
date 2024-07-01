//! EJERCICIO 2 |  ARREGLOS
/**
Inicializa un arreglo llamado frutas con los elementos que usted prefiera. Luego:
-Imprime cada elemento del arreglo en orden utilizando un bucle for.
-Imprime cada elemento del arreglo en orden inverso utilizando un bucle for.
 */
let frutas =["Banana","Naranja","Mandarina"]

for(var i=0; i < frutas.length;i++){
    console.log(frutas[i]);
}

for(var i= frutas.length -1; i>=0;i--){
    console.log(frutas[i]);
}