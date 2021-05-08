const headerContent = document.querySelector('#header-content');

function createHeaderContent() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Meme Generator';
  headerContent.appendChild(title);
}
createHeaderContent();

const memeImageContainer = document.querySelector('#meme-image-container');

function createMemeText() {
  const memeText = document.createElement('h2');
  memeText.id = 'meme-text';
  memeText.innerHTML = '';
  memeImageContainer.appendChild(memeText);
}
createMemeText();

const inputTextContainer = document.querySelector('#input-text-container');

function createTextInput() {
  const inputText = document.createElement('input');
  inputText.id = 'text-input';
  inputTextContainer.appendChild(inputText);
}
createTextInput();

function updateMemeText(inputText) {
  const memeTextElement = document.querySelector('#meme-text');
  memeTextElement.innerHTML = inputText;
}

function addText(event) {
  updateMemeText(event.target.value);
}
const inputTextElement = document.querySelector('#text-input');
inputTextElement.addEventListener('input', addText);
