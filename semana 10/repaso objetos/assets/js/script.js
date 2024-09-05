const cantante = {
 nombre : "Taylor Swift",
 edad : 33,
 nacionalidad : "estadounidense",
 Ocupaciones : ["cantante", "compositora", "empresaria"],
 colaboraciones :[
    {
   nombre : "Kendry lamar",
   cancion : "Bad blood"
    },
    {
        nombre : "Brendon Urie",
        cancion : "ME!"
    },
 ],
};


console.log(cantante.nombre);
console.log(cantante.Ocupaciones[1]);
console.log(cantante.colaboraciones);
console.log(cantante.colaboraciones[0].nombre);

cantante.Ocupaciones[1] ="productora discografica";
console.log(cantante);

cantante.colaboraciones[0] ["nombre"] = "Kendry Lamar";
console.log(cantante);

  

