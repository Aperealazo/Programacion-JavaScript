const miArray = ["Maite","Celeste", "Jazmin","Valentino","Jonatham"];

console.log(miArray);
miArray.push('Mateo')
console.log(miArray);
miArray.unshift('Santiago')
console.log(miArray);

miArray.pop();
console.log(miArray);
miArray.shift();

console.log(miArray);

//miArray.splice(0,4)
console.log(miArray);

console.log(miArray.join("") )
const perros = ["Pupy","Ronnie"]
const gatos = ["Mishi", "Garfield"]

const mascotas = perros.concat(gatos)
console.log(mascotas);

const nombres_ = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
console.log(masculinos);

const nombres = ["Santiago","Mateo","Valentino"];
console.log( nombres.indexOf('Santiago') ) 
console.log( nombres.indexOf('Mateo') ) 
console.log( nombres.indexOf('Julieta') ) // -1