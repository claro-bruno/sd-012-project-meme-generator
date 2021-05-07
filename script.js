function showTextExec() {
  const input = document.getElementById('text-input');
  const text = document.getElementById('meme-text');
  text.innerText = input.value;
}

function showText() {
  const input = document.getElementById('text-input');
  input.addEventListener('keyup', showTextExec);
}

function showImageClick() {
  const imgInput = document.getElementById('meme-insert');
  const imgLocal = document.getElementById('meme-image');
  imgLocal.src = URL.createObjectURL(imgInput.files[0]);
}

function showImage() {
  const imgInput = document.getElementById('meme-insert');
  imgInput.addEventListener('change', showImageClick);
}

function styleButtons() {
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  const container = document.getElementById('meme-image-container');
  fire.addEventListener('click', () => {
    container.style.border = '3px dashed red';
  });
  water.addEventListener('click', () => {
    container.style.border = '5px double blue';
  });
  earth.addEventListener('click', () => {
    container.style.border = '6px groove green';
  });
}

function addFamousImgs() {
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');
  const imgLocal = document.getElementById('meme-image');
  meme1.addEventListener('click', () => {
    imgLocal.src = 'imgs/meme1.png';
  });
  meme2.addEventListener('click', () => {
    imgLocal.src = 'imgs/meme2.png';
  });
  meme3.addEventListener('click', () => {
    imgLocal.src = 'imgs/meme3.png';
  });
  meme4.addEventListener('click', () => {
    imgLocal.src = 'imgs/meme4.png';
  });
}

window.onload = function memeGenerator() {
  showText();
  showImage();
  styleButtons();
  addFamousImgs();
};
