/*
//Metodos de arrays

let nums = [1, 2, 3, 4, 5];
console.log(nums);

// arr.push(x) -> agrega el valor X al final del array
console.log("push")
nums.push (6);
console.log(nums);
nums.push("Hola")
console.log(nums);

// arr.pop (x) -> elimina el ultimo valor del array
console.log("pop")
nums.pop();
console.log(nums)

nums.pop();
console.log(nums)

// arr.unshift (x) -> agrega el valor X al inicio del array
console.log("unshift")
nums.unshift(0);
console.log(nums)

//arr.shift()-> elimina el valor del inicio del array

console.log("shift")
nums.shift();
console.log(nums)
*/
/*
//arr.slice  (begin,end)
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

console.log("Slice")
let subnums1 = nums.slice(0,3);
console.log(subnums1);
console.log(nums);

// Ejercicio
console.log("Ejercicio")
let subnums2 = nums.slice(2,6);
console.log(subnums2);
*/

// arr.splice(start, deletCount, item1, item2, ...)

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Valor de inicio
console.log("Solo valor de inicio")
let subarr1 = nums.splice(2);
console.log(subarr1);

//el array original se ve modificado (lo que sobra del subarray)
console.log(nums)

//Reasigno el array 
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//ahora eliminando elementos
console.log("Eliminando elementos")

//se queda con dos elementos del subarray
let subarr2 = nums.splice(2,2);
console.log(subarr2);
console.log(nums);

//Reasigno el array 
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//ahora agregando elementos
console.log("Agregando elementos")

//agrega elementos
let subarr3 = nums.splice(2, 4, "a", "e", "i", "o", "u" );
console.log(subarr3);
console.log(nums);
