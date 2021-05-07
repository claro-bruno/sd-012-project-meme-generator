function addTextMeme() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('keyup', (event) => {
    memeText.innerHTML = event.target.value;
  });
}
window.onload = () => {
  addTextMeme();
};

function addImageMeme() {
  const imageInput = document.getElementById('meme-insert');
  const imageOutput = document.getElementById('meme-image');
  imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      imageOutput.src = fileReader.result;
    };
    fileReader.readAsDataURL(file);
  });
}
addImageMeme();

function changeBorderFire() {
  const container = document.querySelector('#meme-image-container');
  const fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', () => {
    container.style.border = 'red dashed 3px';
  });
}
changeBorderFire();

function changeBorderWater() {
  const container = document.querySelector('#meme-image-container');
  const waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', () => {
    container.style.border = 'blue double 5px';
  });
}
changeBorderWater();

function changeBorderEarth() {
  const container = document.querySelector('#meme-image-container');
  const earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', () => {
    container.style.border = 'green groove 6px';
  });
}
changeBorderEarth();

function memes() {
    const images = document.querySelectorAll('#ready-memes img');
    const memeImage = document.querySelector('#meme-image');
    for (let index = 0; index < images.length; index += 1) {
        images[index].addEventListener('click', (event) => {
            memeImage.src = event.target.src;
        })
    }
}
memes();