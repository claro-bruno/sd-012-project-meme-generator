const inputTexto = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');
const textoMeme = document.querySelector('#meme-text');
let imgMeme = document.querySelector('#meme-image');

function addTexto() {
    if (inputTexto.value.length > 0) {
        textoMeme.innerHTML = inputTexto.value;
    }
}

inputTexto.addEventListener('keyup', addTexto);

function addImagem() {
    if (this.files.length >0) {
        imgMeme.src = URL.createObjectURL(this.files[0]);
    }
}

inputImg.addEventListener('change', addImagem);