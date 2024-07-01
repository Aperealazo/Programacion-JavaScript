//* Definimos el objeto...

let persona ={
    nombre : 'Mateo',
    apellido:'Arancibia',
    email: 'mArancibia@Gmail.com',
    edad: 17,
    nombreCompleto: function(a,b){
        return this.nombre+' '+this.apellido 
        //return a+' '+ b 
         
        a=a || this.nombre,
        b=b || this.apellido;
        return a+' '+b;
    } 
}


//* Utilizamos el objeto, Llamamos a la funcion creada dentro de mi objeto
console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto('Leandro','Paredes'));

//! Acceder a las propiedades de los objetos:
console.log(persona.nombre);
console.log(persona['edad']);

//! Agregar eliminar Propiedades de un Objeto 
persona.tel='3825 554466';//* AGREGA UN NUEVO ATRIBUTO .
persona.tel='3825 338899';//* MODIFICA EL VALOR ASOCIADO.
delete persona.tel;//* ELIMINA LA PROPIEDAD CON SU VALOR ASOCIADO.

//! For IN
for(nombrePropiedades in persona){
     console.log(nombrePropiedades);
     console.log(persona[nombrePropiedades]);
    }

//! DISTINTAS FORMAS DE IMPRIMIR UN OBJETO EN JAVASCRIPT

//* CONCATENAR CADA VALOR DE CADA PROPIEDAD 
console.log(persona.nombre+','+persona.apellido);

//* FOR IN
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//* metodo OBJECT.VALUES
let personaArray= Object.values(persona);
console.log(personaArray); 

//*Utilizar metodo JSON.stringify

let personaString = JSON.stringify(persona);
console.log(personaString); 

