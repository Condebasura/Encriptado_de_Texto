const campoTexto = document.querySelector("[data-form-text]");

const botonEncriptar = document.querySelector("[data-from-btnEnc]");

const botonDesencriptar = document.querySelector(".button__desencriptar");

const campoResultado = document.querySelector(".campo__resultado");

const cardNada = document.querySelector(".card");

const cardResult = document.querySelector(".resultado");

const botonCopiar = document.querySelector(".boton_copiar");

 const resultNoVacio = () => {
    if(cardResult.textContent.length > 0){
        cardNada.classList.toggle("card_distable");
        cardResult.classList.toggle("resultado_enable");
        botonCopiar.classList.toggle("boton_copiar__enable");
        botonDesencriptar.style.backgroundColor = "white"
        campoTexto.value = "";

    }
}
campoTexto.value = "";
botonEncriptar.addEventListener("click", function(){
    cardResult.textContent = campoTexto.value;
    cardResult.textContent =  cardResult.value.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat") ;
   resultNoVacio();
    })

    botonDesencriptar.addEventListener("click", function(){
        cardResult.textContent = campoTexto.value;
        cardResult.textContent =  cardResult.value.replace( "enter", "e").replace("imes" , "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u") ;
       resultNoVacio();
        
        
        
    } )


    botonCopiar.addEventListener("click" , function updateClipboard() {
        navigator.clipboard.writeText(cardResult.textContent).then(() => {
         cardResult.textContent = "";
        }, () => {
          /* clipboard write failed */
        });
        
      }
      )
      