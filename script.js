function setMemeText() {
  let getTextInput = document.getElementById('text-input').value;
  let getMemeText = document.getElementById('meme-text');
  getMemeText.innerText = getTextInput;
}

function setMemeImg(event) {
  let getMemeImage = document.getElementById('meme-image');
  let urlImg = URL.createObjectURL(event.target.files[0]);
  getMemeImage.src = urlImg;
  getMemeImage.className = 'input-image';
}

document.addEventListener('keyup', (event) => {
  if (event.target.id === 'text-input') {
    setMemeText();
  }
});

const getFileInput = document.getElementById('meme-insert');
getFileInput.addEventListener('change', (event) => {
  setMemeImg(event);
})
