const inputText = document.querySelector('#text-input');
// const container = document.querySelector('#meme-image-container');
const textImage = document.querySelector('#meme-text');
const fileSelector = document.querySelector('#meme-insert');
const imageDisplay = document.querySelector('#meme-image');

inputText.addEventListener('keyup', (event) => {
  textImage.innerHTML = event.target.value;
});

fileSelector.addEventListener('change', (event) => {
  imageDisplay.src = URL.createObjectURL(event.target.files[0]);
});
