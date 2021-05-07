const inputTexto = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');
const textoMeme = document.querySelector('#meme-text');
const botaoFogo = document.querySelector('#fire');
const botaoAgua = document.querySelector('#water');
const botaoTerra = document.querySelector('#earth');
const imgMeme = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');

botaoFogo.style.backgroundcolor = 'red';
botaoAgua.style.backgroundcolor = 'blue';
botaoTerra.style.backgroundcolor = 'green';

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

function addBorda(event) {
    let cor = event.target.style.backgroundcolor;
    container.style.border = '1px solid '+cor;
}

botaoFogo.addEventListener('click', addBorda);
botaoAgua.addEventListener('click', addBorda);
botaoTerra.addEventListener('click', addBorda);