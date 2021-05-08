let getMemeContainer;
let imagem;
let memeInsert;

function carregarArquivo(event = null) {
  if (event !== null) {
    imagem.src = URL.createObjectURL(event.target.files[0]);
    memeInsert.value = '';
  }
}

function digitarTextoMeme() {
  const getInput = document.getElementById('text-input');
  const getText = document.getElementById('meme-text');
  getInput.addEventListener('keyup', () => {
    getText.innerHTML = getInput.value;
  });
}

function fire() {
  const getButtonFire = document.getElementById('fire');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '3px dashed red';
  });
}

function water() {
  const getButtonFire = document.getElementById('water');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '5px double blue';
  });
}

function earth() {
  const getButtonFire = document.getElementById('earth');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '6px groove green';
  });
}

function memes() {
  const todosModelos = document.getElementById('models');
  todosModelos.addEventListener('click', (event) => {
    if (event.target.className.includes('model')) {
      imagem.src = event.target.src;
    }
  });
}

window.onload = function loader() {
  getMemeContainer = document.getElementById('meme-image-container');
  imagem = document.getElementById('meme-image');
  memeInsert = document.getElementById('meme-insert');
  digitarTextoMeme();
  fire();
  water();
  earth();
  memes();
  carregarArquivo();
};
