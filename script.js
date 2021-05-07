function showTextExec() {
  const input = document.getElementById('text-input');
  const text = document.getElementById('meme-text');
  text.innerText = input.value;
}

function showText() {
  const input = document.getElementById('text-input');
  input.addEventListener('keyup', showTextExec);
}

function showImage() {
  const imgInput = document.getElementById('meme-insert');
  const imgLocal = document.getElementById('meme-image');
  imgInput.addEventListener('change', function() {
    imgLocal.src = URL.createObjectURL(imgInput.files[0]);
  });
}

window.onload = function memeGenerator() {
  showText();
  showImage();
};
