const campoTexto = document.querySelector("[data-form-text]");

const botonEncriptar = document.querySelector("[data-from-btnEnc]");

const botonDesencriptar = document.querySelector(".button__desencriptar");

const campoResultado = document.querySelector(".campo__resultado");

const cardNada = document.querySelector(".card");

const cardResult = document.querySelector(".resultado");

const botonCopiar = document.querySelector(".boton_copiar"); 
campoTexto.value = "";
botonEncriptar.addEventListener("click", function(){
    cardResult.textContent = campoTexto.value;
    if(cardResult.textContent.length > 0){
        cardNada.classList.toggle("card_distable");
        cardResult.classList.toggle("resultado_enable");
        botonCopiar.classList.toggle("boton_copiar__enable");
        botonDesencriptar.style.backgroundColor = "white"
        campoTexto.value = "";
    }
    })