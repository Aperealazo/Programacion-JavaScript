//* METODO GET EN OBJETOS DE JAVASCRIPT
//* get -> traer  this-> est
let persona ={
    nombre : 'Mateo',
    apellido:'Arancibia',
    email: 'mArancibia@Gmail.com',
    edad: 17,
    nombreCompleto: function(a,b){
        return this.nombre+' '+this.apellido 
    },
    get nombre_apellido_email(){
      return this.nombre +' '+ this.apellido +' '+ this.email  
    }
}


//* IMPRIMIMOS EL METODO GET 
console.log(persona.nombre_apellido_email);

