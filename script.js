function createHeaderContent() {
  const headerContent = document.querySelector('#header-content');
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Meme Generator';
  headerContent.appendChild(title);
}

function createTextInput() {
  const inputContainer = document.querySelector('#input-container');
  const inputText = document.createElement('input');
  inputText.id = 'text-input';
  inputContainer.appendChild(inputText);
}

function createImageInput() {
  const inputContainer = document.querySelector('#input-container');
  const inputImage = document.createElement('input');
  inputImage.id = 'meme-insert';
  inputImage.type = 'file';
  inputImage.name = 'meme';
  inputImage.accept = 'image/*';
  inputContainer.appendChild(inputImage);
}

function createMemeImageContainer() {
  const memeContainer = document.querySelector('#meme-container');
  const memeImageContainer = document.createElement('div');
  memeImageContainer.id = 'meme-image-container';
  memeContainer.appendChild(memeImageContainer);
}

function createMemeTextContainer() {
  const memeImageContainerElement = document.querySelector('#meme-image-container');
  const memeTextContainer = document.createElement('div');
  memeTextContainer.id = 'meme-text-container';
  memeImageContainerElement.appendChild(memeTextContainer);
}

function createMemeText() {
  const memeTextContainerElement = document.querySelector('#meme-text-container');
  const memeText = document.createElement('h2');
  memeText.id = 'meme-text';
  memeTextContainerElement.appendChild(memeText);
}

function createMemeImage() {
  const memeImageContainerElement = document.querySelector('#meme-image-container');
  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  memeImageContainerElement.appendChild(memeImage);
}

function initialize() {
  createHeaderContent();
  createTextInput();
  createImageInput();
  createMemeImageContainer();
  createMemeTextContainer();
  createMemeText();
  createMemeImage();
  createMemeText();
}
initialize();

function updateMemeText(inputText) {
  const memeTextElement = document.querySelector('#meme-text');
  memeTextElement.innerHTML = inputText;
}

const inputTextElement = document.querySelector('#text-input');

function addText(event) {
  updateMemeText(event.target.value);
}
inputTextElement.addEventListener('input', addText);

const inputImageElement = document.querySelector('#meme-insert');

function addImage() {
  const fileList = this.files;
  const numFile = fileList.length;
  const file = fileList[numFile - 1];
  alert(numFile);
  alert(file.name);
  alert(file.size);
  alert(file.type);
  const src = URL.createObjectURL(file);
  alert(src);
}
inputImageElement.addEventListener('change', addImage, false);
