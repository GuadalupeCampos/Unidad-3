// Objetos Literales
const persona = {
    nombre : "Juan",
    apellido : "Díaz",
    edad : 25,
    dni_cedula : 38149248,
};
//Mostramos el objeto
console.log(persona);
//Acceder o modificasr un objeto
//objeto.clave = valor; Notación de punto
//objeto ["clave"] = valor; Notación de corchetes

//Accedemos a una propiedad
//consolelog(persona[0]); // esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

//Agregamos propiedades
persona.correo = "micorreo@correo.com"

console.log(persona);

//Modificar propiedades

persona.correo = "Juandíaz80@correo.com"
console.log(persona);
