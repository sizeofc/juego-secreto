let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroDelUsuario = document.getElementById("valorUsuario").value;
    numeroDelUsuario = parseInt(numeroDelUsuario);


    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p', `ACERTASTE, EL NUMERO ERA EL: ${numeroSecreto} 
            en ${intentos} ${intentos == 1 ? " intento" : " intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", "disabled");
    } else {
        if (numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p', "EL numero es menor");

        } else {
            asignarTextoElemento('p', "El numero es mayor ");
        }
        intentos++;
        limpiarCaja();

    }
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numero = Math.floor(Math.random() * 10) + 1;
    console.log(numero);

    if (listaNumerosSorteados.length == 10) {
        asignarTextoElemento('p', "Ya se sorteron todos los numeros de la lista");
    }
    else if (listaNumerosSorteados.includes(numero)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numero);
        return numero;
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del Numero Secreto");
    asignarTextoElemento('p', "Ingresa un numero del 1 al 10 ");
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);

    intentos = 1;
}

condicionesIniciales();

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("intentar").removeAttribute("disabled");
    document.getElementById("reiniciar").setAttribute("disabled", "disabled");
}
