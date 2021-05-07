
function showTextExec() {
  const input = document.getElementById('text-input');
  const text = document.getElementById('meme-text');
  text.innerText = input.value;
}

function showText() {
  const input = document.getElementById('text-input');
  input.addEventListener('keyup', showTextExec)
}

window.onload = function memeGenerator() {
  showText();
};
