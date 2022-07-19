const campoTexto = document.querySelector("[data-form-text]");

const botonEncriptar = document.querySelector("[data-from-btnEnc]");

const botonDesencriptar = document.querySelector(".button__desencriptar");

const campoResultado = document.querySelector(".campo__resultado");

const cardNada = document.querySelector(".card");

const cardResult = document.querySelector(".resultado");

const botonCopiar = document.querySelector(".boton_copiar"); 

botonEncriptar.addEventListener("click", function(){
    cardResult.textContent = campoTexto.value;
    if(cardResult.value != ""){
        cardNada.style.display = 'none' ;
        campoTexto.value = '';
        cardResult.style.display = 'block';
    }
    })