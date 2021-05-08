const inputText = document.querySelector('#text-input');
// const container = document.querySelector('#meme-image-container');
const textImage = document.querySelector('#meme-text');

inputText.addEventListener('keyup', (event) => {
  textImage.innerHTML = event.target.value;
});
