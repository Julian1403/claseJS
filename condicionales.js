// el if siempre va entrar a evaluar si el valor es verdadero. 
//si coloco los if solitos, los va tomar como independientes y va entrar a evaluar cada uno por de aparte. 
// los casos son:
//if solito
// if con else 
// if con else if y else
//la sintaxis es:
let comer=true;
if(comer){
    console.log("si, todos deben comer ");
}
//los ejemplos los hacemos con los operadores lógicos.
//si dentro de un if pongo: !, significa que estoy pidiendo q evalue la condicion de forma negativa, ejemplo:

if(!comer){//esto es comer==false, entonces cuando esa vble sea falso va entrar en el  if. 
    console.log("no es posible");
}

let edad = 18;
let mensaje = edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
//operador ternario 

let numero1 = '0'; // string

let numero2 = 0; // number

numero1 === numero2 ? console.log("si")  :  console.log("no")