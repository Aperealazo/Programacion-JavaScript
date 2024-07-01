//PASO POR REFERENCIA EN JS
// OBJETO(ARRAY) SE PASAN POR REFERENCIA

let array=[10,20,50];
console.log(`El valor del array sin modificar es de: ${array}`);

function cambiarValor(parametro){
    parametro[0]=50;
    parametro[1]=5;
    parametro[2]=7;

}
cambiarValor(array)
console.log(`Valor array modificado: ${array[0]},${array[1]},${array[2]}`);




