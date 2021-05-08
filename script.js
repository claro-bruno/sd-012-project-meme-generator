const getMemeImage = document.getElementById('meme-image');
const getMemeImgContainer = document.getElementById('meme-image-container');

function setMemeText() {
  const getTextInput = document.getElementById('text-input').value;
  const getMemeText = document.getElementById('meme-text');
  getMemeText.innerText = getTextInput;
}

function setMemeImg(event) {
  const urlImg = URL.createObjectURL(event.target.files[0]);
  getMemeImage.src = urlImg;
  getMemeImage.className = 'input-image';
}

const getFileInput = document.getElementById('meme-insert');
getFileInput.addEventListener('change', (event) => {
  setMemeImg(event);
});

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

document.addEventListener('click', (event) => {
  if (event.target.id === 'meme-1') {
    const memeImg1 = document.getElementById('meme-1').src;
    getMemeImage.src = memeImg1;
  }
  if (event.target.id === 'meme-2') {
    const memeImg2 = document.getElementById('meme-2').src;
    getMemeImage.src = memeImg2;
  }
  if (event.target.id === 'meme-3') {
    const memeImg3 = document.getElementById('meme-3').src;
    getMemeImage.src = memeImg3;
  }
  if (event.target.id === 'meme-4') {
    const memeImg4 = document.getElementById('meme-4').src;
    getMemeImage.src = memeImg4;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.target.id === 'text-input') {
    setMemeText();
  }
});
