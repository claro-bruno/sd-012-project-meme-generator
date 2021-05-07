let caminhoTextInput = document.getElementById("text-input");
let caminhoImageInput = document.getElementById("meme-insert");
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
caminhoTextInput.addEventListener("input", insereTexto);

//  função insere imagem em meme-image-container
function insereImagem (){
    let caminhoImagem = document.getElementById("meme-image");
    let objetoFile = caminhoImageInput.files[0];
    let imageUrl = URL.createObjectURL(objetoFile);

    if(caminhoImagem){
        caminhoImagem.src = imageUrl;
    }else {
        caminhoImagem = document.createElement("img");
        caminhoImagem.setAttribute("id", "meme-image");
        caminhoImagem.src = imageUrl;
        caminhoMemeContainer.appendChild(caminhoImagem);
    };
};

//  adiciona eventListener em text-input
caminhoImageInput.addEventListener("change", insereImagem);