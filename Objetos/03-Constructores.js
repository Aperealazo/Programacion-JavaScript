//* Funcion constructor de objetos de tipo Persona
function persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email= email;
}
//* Creamos nuestro primer objeto derivado de la clase persona
let padre = new persona('Lionel','Messi','lmessi@gmail.com');
let madre =  new persona('Antonella','Rocuzzo','aRocuzzo@gmail.com')
let hijo= new persona('Ciro','Messi','Cmessi@gmail.com')

console.log(padre);
console.log(madre);
console.log(hijo);



persona.prototype.tel='12345';
console.log(padre);
