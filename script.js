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

const getMemeImgContainer = document.getElementById('meme-image-container');
const getFileInput = document.getElementById('meme-insert');
getFileInput.addEventListener('change', (event) => {
  setMemeImg(event);
})

document.addEventListener('click', (event) => {
  if (event.target.id === 'fire') {
    getMemeImgContainer.style.border = '3px dashed red';
  }
  if (event.target.id === 'water') {
    getMemeImgContainer.style.border = '5px double blue';
  }
  if (event.target.id === 'earth') {
    getMemeImgContainer.style.border = '6px groove green';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.target.id === 'text-input') {
    setMemeText();
  }
});