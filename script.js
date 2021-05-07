const txtInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeTxt = document.getElementById('meme-text');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const container = document.getElementById('meme-image-container');

function textUpdate() {
  memeTxt.innerText = txtInput.value;
}

function imageUpdate() {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(imgInput.files[0]);
}

function fire() {
  container.style.border = '3px dashed red';
}

function water() {
  container.style.border = '5px double blue';
}

function earth() {
  container.style.border = '6px groove green';
}

window.onload = function pageLoad() {
  txtInput.addEventListener('keyup', textUpdate);
  imgInput.addEventListener('change', imageUpdate);
  
  btnFire.addEventListener('click', fire);
  btnWater.addEventListener('click', water);
  btnEarth.addEventListener('click', earth);
};
