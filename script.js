const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');

textInput.addEventListener('keyup', addText = () => {
  memeText.innerHTML = textInput.value;
});

imgInput.addEventListener('change', displayImg = (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]); // do artigo https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
});