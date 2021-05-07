let inputTexto = document.querySelector('#text-input');
let textoMeme = document.querySelector('#meme-text');

function addTexto() {
    if (inputTexto.value.length > 0) {
        textoMeme.innerHTML = inputTexto.value;
    }
}

inputTexto.addEventListener('keyup', addTexto);