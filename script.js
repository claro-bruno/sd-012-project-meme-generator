let caminhoTextInput = document.getElementById("text-input");
let caminhoMemeContainer = document.getElementById("meme-image-container");

//  função insere texto no meme-image-container
function insereTexto (){
    let caminhoTexto = document.getElementById("meme-text");
    
    if (caminhoTexto) {
        caminhoTexto.innerText = caminhoTextInput.value;
    }else {
        caminhoTexto = document.createElement("p");
        caminhoTexto.setAttribute("id", "meme-text");
        caminhoTexto.innerText = caminhoTextInput.value;
        caminhoMemeContainer.appendChild(caminhoTexto);
    };
};

//  adiciona eventListener em text-input
caminhoTextInput.addEventListener("change", insereTexto);