const txtInput = document.getElementById('text-input');
const memeTxt = document.getElementById('meme-text');

function textUpdate() {
  memeTxt.innerText = txtInput.value;
}

window.onload = function pageLoad () {
  txtInput.addEventListener ('keyup', textUpdate)
}