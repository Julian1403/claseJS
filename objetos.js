
let persona = {
    nombre : "Alejandro",
    apellido: "Ospina",
    edad: 35,
    casado: true,
    telefono: 3115317677,
    direccion: {
        nombre : "la finca",
        ruta : "Rionegro-Marinilla",
        referencia: "debajo la avenida principal",
        ruta_direccion: "finca 714"
    }
}


//1era forma de navegar dentro de un objeto:
console.log("Muestra el valor de nombre:" , persona.nombre);
console.log("Muestra una clave dentro de un objeto dentro de otro: ", persona.direccion.nombre);

//2da forma de navegar dentro de un objeto:en vez del punto pongo:["ruta"]
console.log("MOSTRANDO MI PRIMER OBJETO:", persona.direccion["ruta"]);

//3era forma de navegar dentro de un objeto:
const {nombre}=persona;
console.log(nombre);

//colocando un alias: 
const {nombre:persona1}=persona;
console.log(persona1);

//agregar o modificar elementos de un objeto: 
persona.edad=37;
persona.apodo="aron";
console.log(persona);
