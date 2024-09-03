/*
//modificación de arrays
//.map(función)
 //ejercicio
 // 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
  console.log(palabras);
  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

  let palabrasCantidad = palabras.map((c) =>{
    if(c.length > 7){
        return ("palabra larga");
    }
    return("palabra corta");
  })

  console.log(palabrasCantidad);

  // .reduce()
const nums = [1, 2, 3, 4, 5];
console.log(nums);

let suma = nums.reduce((a,b) => a + b, 0);
console.log(suma);

// Usando el mismo array, multiplicar todos los números.

let muliplicacion = nums.reduce ((a, b) => a * b, 1);
console.log(muliplicacion);

let puntos = [11, 2, 1, 21, 23, 10];
// .sort(funcionDeComparacion)
//ordena el arreglo por defecto

puntos.sort();
console.log("ordenamiento por defecto")
console.log(puntos);

//Ordenamiento numérico estricto
puntos.sort((a, b) => a- b);
console.log("ordenamiento numérico estricto")
console.log(puntos);
//.reverse()

const arr = [ true, 1, "hola", 54.76, "a"];
console.log(arr);

//Revertimos el arreglo
arr.reverse();
console.log(arr);
*/
// split()

console.log("split");
const frase = "Hola buenos días a todas"
console.log(frase);

//creamos el array usando el espacio como separador
let palabras = frase.split(" ");
console.log(palabras);

//Creamos el array usando la coma (,) como separador

const csv = "Perú,Argentina,Chile,Colombia";
console.log(csv);

//Creamos el array usando la coma (,)  como separador
let paises = csv.split(",")
console.log(paises);

// join()

console.log("join");

let strPalabras = palabras.join (" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);