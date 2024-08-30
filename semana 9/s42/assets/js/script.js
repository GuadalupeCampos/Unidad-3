/*
// Busqueda en arreglos

let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
console.log(letras);
// .indexOf(elemento, desde)
//Devuelve el indice  de la primera ocurrencia de un elemento en un arreglo, desde una posición determinada
console.log("IndexOf");
let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));
//Busca desde el indice especificado
console.log(letras.indexOf("a", 4));

//Buscamos un elemento que no existe en el arreglo
console.log(letras.indexOf("x"));

//LastIndexOf (elemento, desde)
//Devuelve el indice de la ultima ocurrencia de un elemento en un arreglo, desde una posición determinada.
console.log("LastIndexOf");

console.log(letras.lastIndexOf("a"));

//Busca desde el indice especificado
console.log(letras.lastIndexOf("a", 1));

//Includes(elemento, desde)
console.log("Includes")
console.log(letras.includes("c"));
console.log(letras.includes("c", 3));

*/
let nums = [34, 65, 23, 45, 96, 143, 4, 56];


console.log(nums);

//find()
//devuelve el primer elemento que cumple una condición
let coincidencia = nums.find((num)=> num > 60);

//findIndex ()
let coincidenciaIndex = nums.findIndex((num) => num > 60);

// filter()
let filtrado = nums.filter((num) => num > 60);

console.log(coincidencia);
console.log(coincidenciaIndex);
console.log(filtrado);
