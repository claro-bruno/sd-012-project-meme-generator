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
  inputText.placeholder = 'Ex.: Lorem Ipsum is simply dummy text of the printing and typesetting industry...';
  inputText.maxLength = '60';
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
}
initialize();

const inputTextElement = document.querySelector('#text-input');

function addText(event) {
  if (event.target.value !== null) {
    const text = event.target.value;
    const memeTextElement = document.querySelector('#meme-text');
    memeTextElement.innerText = text;
  }
}
inputTextElement.addEventListener('input', addText);

function updateMemeImage(imageFile, srcImage) {
  const memeImageElement = document.querySelector('#meme-image');
  memeImageElement.src = srcImage;
  memeImageElement.onload = function () {
    URL.revokeObjectURL(imageFile);
  };
}

const inputImageElement = document.querySelector('#meme-insert');

function addImage() {
  const fileList = this.files;
  const numFile = fileList.length;
  const file = fileList[numFile - 1];
  const src = URL.createObjectURL(file);
  updateMemeImage(file, src);
}
inputImageElement.addEventListener('change', addImage, false);
