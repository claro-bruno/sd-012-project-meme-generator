const txtInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeTxt = document.getElementById('meme-text');

function textUpdate() {
  memeTxt.innerText = txtInput.value;
}

function imageUpdate() {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(imgInput.files[0]);
}

window.onload = function pageLoad() {
  txtInput.addEventListener('keyup', textUpdate);
  imgInput.addEventListener('change', imageUpdate);
};
