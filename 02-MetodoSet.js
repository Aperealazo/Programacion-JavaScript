//* METODO GET EN OBJETOS DE JAVASCRIPT

let persona ={
    nombre : 'Mateo',
    apellido:'Arancibia',
    email: 'mArancibia@Gmail.com',
    edad: 17,
    idioma:'frances',
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set lenguaje(lenguaje){
        this.idioma= lenguaje.toUpperCase();
    }
}
console.log(persona.lenguaje);
persona.lenguaje='ingles';
console.log(persona.lenguaje);

console.log(persona.idioma);
