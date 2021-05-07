const inputTexto = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');
const textoMeme = document.querySelector('#meme-text');
const botaoFogo = document.querySelector('#fire');
const botaoAgua = document.querySelector('#water');
const botaoTerra = document.querySelector('#earth');
const imgMeme = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');

function addTexto() {
    if (inputTexto.value.length > 0) {
        textoMeme.innerText = inputTexto.value;
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
    let bordaFire = '3px dashed red';
    let bordaWater = '5px double blue';
    let bordaEarth = '6px groove green';
    if (event.target === botaoFogo) {
        container.style.border = bordaFire;
    } else if (event.target === botaoAgua) {
        container.style.border = bordaWater;
    } else {
        container.style.border = bordaEarth;
    }
}

botaoFogo.addEventListener('click', addBorda);
botaoAgua.addEventListener('click', addBorda);
botaoTerra.addEventListener('click', addBorda);