//! REGLAS FUNCIONES RECURSIVAS
//! 1. UNA FUNCIÓN QUE SE LLAMA A SI MISMA

/*
mi_funcion(VALOR)

    mi_funcion(Valor -1)

*/
//! 2. DEBE AVANZAR HACIA UN CASO BASE, DE LO CONTRARIO CAEMOS EN CICLOS INFINITOS
/** 
 * mi_funcion(n)
    SI n==1 ENTONCES
            REGRESA N
    SINO
            mi_funcion(n-1)

*/

//Funciones Recursivas
//imprimir 3,2,1

function funcionRecursiva(numero){
    //Caso base
    if(numero==1)
        console.log(numero);
    else{console.log(numero);
        funcionRecursiva(numero -1)
    }
}

//! llamamos a nuestra funcion recursiva 

funcionRecursiva(5)



