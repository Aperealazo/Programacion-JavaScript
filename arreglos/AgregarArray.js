const nombre =["Damir","Felipe","Antonella","Noelia"]

console.log(nombre);
nombre.push("Gabriel")
console.log(nombre);

nombre.unshift("Daniel")
console.log(nombre);

nombre.pop();
nombre.shift();
console.log(nombre);



console.log( nombre.join("! ") );

const perros = ["Pupy", "Ronnie"]

const gatos = ["Mishi", "Garfield","Zuri"]

const mascotas = perros.concat(gatos)
console.log(mascotas)
