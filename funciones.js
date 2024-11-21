//Funcion declarativa
function saludar(){
    console.log("Hola mundo");
    }
    
    saludar();

    //Funcion anonima.
const saludar1 = function(nombres){
    console.log("Hola mundo "+nombres);
}
saludar1("Jariana");

//Funciones de flecha o arrow functions
const suma = (a,b) => {
    console.log(a+b);
}
suma(10,15);










//Ejericico Sln
let nombre="juanes";
let profesion="medico";

function saludo(){
    console.log("hola "+nombre+ " eres un: "+ profesion);//concatenación
    console.log( `Hola me llamo ${nombre} y soy ${profesion}`);//interpolacion
}
saludo();

//otra forma
function saludar(nombress, profesioon){
    console.log("hola"+" "+nombress+"y su profesion es: "+profesioon)
}
saludar("mateo", "odontologo")
