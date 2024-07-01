class persona{
    //! Declaramos Atributos
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }  
    //! Declaramos Metodos
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        return this._nombre= nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido= apellido;
    }
    nombrecompleto(){
        return this._nombre+' '+ this._apellido;
    }
}

//* creamos una herencia para la clase hija (Empleado) de la clase padre (persona)
class empleado extends persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//! usamos la palabra reservada ' super() ' para llamar al constructor de la clase padre
        this._departamento =  departamento;        
    }
    get departamento(){
        return this._departamento;

    }
    set departamento(departamento){
        this._departamento= departamento;
    }

    //* sobreescritura --> modifica el comportamiento de una clase 'Padre'
    nombrecompleto(){
    return this._nombre+' '+ this._apellido+' '+ this._departamento;
}
}

let persona1 =  new persona('Marcos','Castillo');
console.log(persona1);
let empleado1 = new empleado('Maria','Perez','Sistemas');
console.log(empleado1);
console.log(empleado1._nombre);
console.log(empleado1.nombrecompleto());
console.log(empleado1.nombrecompleto());
