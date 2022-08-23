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
};



botonEncriptar.addEventListener("click", function(){
  const campoTexto = document.querySelector("[data-form-text]");

if( campoTexto.value.match(/[A-Z]/g) || campoTexto.value.match(/[\"\#\$\%\&\=\?\¡\'\¿\¨\+\*\.\,\;\:\_\!\|]/g) || campoTexto.value.match(/[áéíóú]/g)){
   cardResult.style.color = "red";
   cardResult.textContent = "ingrese solo letras minusculas sin acentos o caracteres especiales!!";
 }else{
     cardResult.style.color = "rgb(28, 14, 221)" ;
    cardResult.textContent = campoTexto.value;
    cardResult.textContent =  cardResult.value.toLowerCase().replace(/e/g , "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g , "ufat") ;
    resultNoVacio();
   textVacio();
  }
    });


    botonDesencriptar.addEventListener("click", function(){
      const campoTexto = document.querySelector("[data-form-text]");
      if( campoTexto.value.match(/[A-Z]/g) || campoTexto.value.match(/[\"\#\$\%\&\=\?\¡\'\¿\¨\+\*\.\,\;\:\_\!\|]/g) || campoTexto.value.match(/[áéíóú]/g)){
        cardResult.style.color = "red";
    cardResult.textContent = "ingrese solo letras minusculas sin acentos o caracteres especiales!!";
      
       }else{
        cardResult.style.color = "rgb(28, 14, 221)" ;
         cardResult.textContent = campoTexto.value;
        cardResult.textContent =  cardResult.value.toLowerCase().replace( /enter/g, "e").replace(/imes/g , "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u") ;
       resultNoVacio();
        textVacio();
       }
    } );


    botonCopiar.addEventListener("click" , function updateClipboard() {
        navigator.clipboard.writeText(cardResult.textContent).then(() => {
         campoTexto.value = "";
        }, () => {
          /* clipboard write failed */
        });
        
      }
      )
      