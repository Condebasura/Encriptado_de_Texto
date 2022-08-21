const campoTexto = document.querySelector("[data-form-text]");

const botonEncriptar = document.querySelector("[data-from-btnEnc]");

const botonDesencriptar = document.querySelector(".button__desencriptar");

const campoResultado = document.querySelector(".campo__resultado");

const cardNada = document.querySelector(".card");

const cardResult = document.querySelector(".resultado");

const botonCopiar = document.querySelector(".boton_copiar");


campoTexto.value = "" ;
 const resultNoVacio = () => {
    if(cardResult.textContent.length > 0){
        cardNada.style.display = "none";       
        cardResult.style.display = "flex";
        botonCopiar.style.display = "block";
        botonDesencriptar.style.backgroundColor = "white";
       
       
    }
}

const textVacio = () =>{
  if(campoTexto.value == "" ){
    cardNada.style.display = "block"
        cardResult.style.display = "none";
        botonCopiar.style.display = "none";
        botonDesencriptar.style.backgroundColor = "#d3d3cf"
  }
}

botonEncriptar.addEventListener("click", function(){
    cardResult.textContent = campoTexto.value;
    cardResult.textContent =  cardResult.value.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat") ;
    
    resultNoVacio();
   textVacio();
   
    })

    botonDesencriptar.addEventListener("click", function(){
        cardResult.textContent = campoTexto.value;
        cardResult.textContent =  cardResult.value.replace( "enter", "e").replace("imes" , "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u") ;
       resultNoVacio();
        textVacio();
      
    } )


    botonCopiar.addEventListener("click" , function updateClipboard() {
        navigator.clipboard.writeText(cardResult.textContent).then(() => {
         campoTexto.textContent = "";
        }, () => {
          /* clipboard write failed */
        });
        
      }
      )
      