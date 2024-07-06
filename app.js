let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El número es menor")  
        } else {
        asignarTextoElemento("p","El número es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se acabaron todos los números posibles");
    } else {
    // si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego del Número Secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();