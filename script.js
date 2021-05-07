let getMemeContainer;
const CarregarArquivo = (event) => {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
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

window.onload = () => {

  getMemeContainer = document.getElementById('meme-image-container');

  digitarTextoMeme();
  fire();
  water();
  earth();
}