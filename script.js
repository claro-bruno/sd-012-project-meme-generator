function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  textInput.addEventListener('keyup', (event) => {
    memeText.innerHTML = event.target.value;
  });
}

getText();
