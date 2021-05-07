let getMemeContainer;
let image;
let memeInsert;

function carregarArquivo() {
  memeInsert.addEventListener('change', (event) => {
    image.src = URL.createObjectURL(event.target.files[0]);
  })
}

function digitarTextoMeme() {
  const getInput = document.getElementById('text-input');
  const getText = document.getElementById('meme-text');
  getInput.addEventListener('keyup', () => {
    getText.innerHTML = getInput.value;
  })
}

function fire() {
  const getButtonFire = document.getElementById('fire');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '3px dashed red';
  })
}

function water() {
  const getButtonFire = document.getElementById('water');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '5px double blue';
  })
}

function earth() {
  const getButtonFire = document.getElementById('earth');
  getButtonFire.addEventListener('click', () => {
    getMemeContainer.style.border = '6px groove green';
  })
}

function memes() {
  const modelos = document.getElementsByClassName('model');
  for (let i = 0; i < modelos.length; i += 1) {
    modelos[i].addEventListener('click', (event) => {
      image.src = event.target.src;
    })
  }
}

window.onload = () => {

  getMemeContainer = document.getElementById('meme-image-container');
  image = document.getElementById('meme-image');
  memeInsert = document.getElementById('meme-insert');

  digitarTextoMeme();
  carregarArquivo();
  fire();
  water();
  earth();
  memes();
}