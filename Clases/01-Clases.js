class persona{
    //! Declaramos Atributos
    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    } 

    //! Declaramos Metodos
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre= nombre;
    }
}

/*
let persona1 =  new persona ('Juan','Perez',18);
console.log(persona1);
let persona2 =  new persona ('Marcos','Castillo');
console.log(persona2);
*/

//* Get  y set para una clase
let persona1 = new persona('Marcos','Castillo');
persona1.nombre='Alexis'; //* Set Nombre
console.log(persona1);//* Get nombre Marcos Nicolas 

