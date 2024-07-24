///////  Definicion de Variables  /////////
let texto = "";
let textoCodificado = "";
let textoCopiado = "";

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

function asignarTextoPorId(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarTextarea(elemento) {
    document.getElementById(elemento).value = '';
}

/////////////////////////////////////////
////// Funcionalidad de los botones /////
/////////////////////////////////////////
function encriptar(){
    let textoCodificado = "";
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

        /*** ***reglas para encriptar ****/
        // La letra "a" es convertida para "ai"
        // La letra "e" es convertida para "enter"
        // La letra "i" es convertida para "imes"
        // La letra "o" es convertida para "ober"
        // La letra "u" es convertida para "ufat"

        for (let letra of texto) {
            console.log(letra);

            switch (letra.toLowerCase()) {
                case 'a':
                    console.log("Vocal 'a' encontrada");
                    textoCodificado = textoCodificado + "ai";
                    break;
                case 'e':
                    console.log("Vocal 'e' encontrada");
                    textoCodificado = textoCodificado + "enter";
                    break;
                case 'i':
                    console.log("Vocal 'i' encontrada");
                    textoCodificado = textoCodificado + "imes";
                    break;
                case 'o':
                    console.log("Vocal 'o' encontrada");
                    textoCodificado = textoCodificado + "ober";
                    break;
                case 'u':
                    console.log("Vocal 'u' encontrada");
                    textoCodificado = textoCodificado + "ufat";
                    break;
                default:
                    textoCodificado = textoCodificado + letra.toLowerCase();
                    break;
            }
        }

        console.log(textoCodificado);
        asignarTextoPorId('textoResultado',`${textoCodificado}`);
    }
}

function desencriptar(){
    alert("desencriptar");
}

function copiar(){
    textoCopiado = document.getElementById('textoResultado').value;
    
    textoCodificado = "";
    texto = "";
    limpiarTextarea('textoResultado');
    limpiarTextarea('textoEntrada');

    visualizarElemento('resultadoTextoMsg', 'block');
    visualizarElemento('resultadoImagen', 'block');
    visualizarElemento('textoResultado', 'none');
    visualizarElemento('resultadoCopiar', 'none');




    
}

//////// INICIO /////////



iniciaControles();