const inputImagem = document.querySelector('#meme-insert');
const imagem = document.querySelector('#meme-image');
const inputTexto = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text');
const botaoFire = document.querySelector('#fire');
const botaoWater = document.querySelector('#water');
const botaoEarth = document.querySelector('#earth');
const memeContainer = document.querySelector('#meme-image-container');
const imagensDeMemes = document.querySelectorAll('.meme-pronto');

// Ideia from https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

function adicionandoImagemNoContainer() {
  inputImagem.addEventListener('change', (event) => {
    imagem.src = URL.createObjectURL(event.target.files[0]);
    imagem.onload = () => {
      URL.revokeObjectURL(imagem.src);
    };
  });
}

adicionandoImagemNoContainer();

function adicionandoTextoNoContainer() {
  inputTexto.addEventListener('keyup', () => {
    texto.innerText = inputTexto.value;
  });
}

adicionandoTextoNoContainer();

function adicionandoBordas() {
  botaoFire.addEventListener('click', () => {
    memeContainer.style.border = '3px dashed red';
  });
  botaoWater.addEventListener('click', () => {
    memeContainer.style.border = '5px double blue';
  });
  botaoEarth.addEventListener('click', () => {
    memeContainer.style.border = '6px groove green';
  });
}

adicionandoBordas();

function usandoImagemDoExemplo() {
  for (let index = 0; index < imagensDeMemes.length; index += 1) {
    imagensDeMemes[index].addEventListener('click', () => {
      imagem.src = imagensDeMemes[index].src;
    });
  }
}

usandoImagemDoExemplo();