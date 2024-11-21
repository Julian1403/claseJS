function calcular(num) {
    return num * 2;
}

function procesar(valor) {
    let resultado = calcular(valor + 5);
    return resultado - 3;
}

console.log(procesar(4));

function mostrarMensaje() {
    let mensaje = "Hola desde la función";
}

console.log(mensaje);