///////  Definicion de Variables  /////////
let numeroSecreto = 0;
let intentos = 0;

//////////////////////////////////////
////// Definicion de funciones  //////
//////////////////////////////////////
function iniciaControles(){
    visualizarElemento('msgError', 'none');
    visualizarElemento('resultadoCopiar', 'none');
    visualizarElemento('textoResultado', 'none');
}

function visualizarElemento(idElemento, valor) {
    var elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.style.display = valor;
    } else {
        console.log('Elemento no encontrado');
    }
}

function evaluaCadena(cadena) {
    // Recorremos cada caracter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Obtenemos el código ASCII del caracter actual
        let codigo = cadena.charCodeAt(i);
        // Verificamos si el código ASCII está en el rango de los números (48-57)
        if (codigo >= 48 && codigo <= 57) {
            // Si encontramos un número, retornamos false
            return false;
        }
    }
    // Si no se encuentran números, retornamos true
    return true;
}

/////////////////////////////////////////
////// Funcionalidad de los botones /////
/////////////////////////////////////////
function encriptar(){
    let texto = document.getElementById('textoEntrada').value;
    visualizarElemento('msgError', 'none');
    if(evaluaCadena(texto) == false){
        /* El TEXTO contiene numeros o caracteres especiales
           no cumple el requisito.
           operacion a realizar : "ENVIAR MENSAJE AL USUARIO
           PARA QUE VERIFIQUE EL CONTENIDO DEL TEXTO"
        */
        console.log('La cadena tiene numeros');
        visualizarElemento('msgError', 'block');
    } else {
        console.log('la cadena cumple el primer requisito');
        visualizarElemento('resultadoTextoMsg', 'none');
        visualizarElemento('resultadoImagen', 'none');
        visualizarElemento('textoResultado', 'block');
        visualizarElemento('resultadoCopiar', 'block');
    }
}

function desencriptar(){
    alert("desencriptar");
}

function copiar(){
    alert("copiar");
}

//////// INICIO /////////

iniciaControles();