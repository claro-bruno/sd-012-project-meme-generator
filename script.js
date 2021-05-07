function setMemeText() {
  let getTextInput = document.getElementById('text-input').value;
  let getMemeText = document.getElementById('meme-text');
  getMemeText.innerText = getTextInput;
}

document.addEventListener('keyup', (event) => {
  if (event.target.id === 'text-input')
  setMemeText();
});
