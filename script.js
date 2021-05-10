const borderOptionsID = '#border-options';
const borderOptionClass = 'border-option';
const memeImageContainerID = '#meme-image-container';

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
  inputText.placeholder = 'Ex.: Lorem Ipsum is simply dummy text of the printing and typesetting...';
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
  const memeImageContainerElement = document.querySelector(memeImageContainerID);
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
  const memeImageContainerElement = document.querySelector(memeImageContainerID);
  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  memeImageContainerElement.appendChild(memeImage);
}

function createBorderOptions() {
  const optionContainerElement = document.querySelector('#option-container');
  const borderOptions = document.createElement('div');
  borderOptions.id = 'border-options';
  optionContainerElement.appendChild(borderOptions);
}

function createFireOptionButton() {
  const borderOptionsElement = document.querySelector(borderOptionsID);
  const fireOptionButton = document.createElement('button');
  fireOptionButton.id = 'fire';
  fireOptionButton.className = borderOptionClass;
  borderOptionsElement.appendChild(fireOptionButton);
}

function createWaterOptionButton() {
  const borderOptionsElement = document.querySelector(borderOptionsID);
  const waterOptionButton = document.createElement('button');
  waterOptionButton.id = 'water';
  waterOptionButton.className = borderOptionClass;
  borderOptionsElement.appendChild(waterOptionButton);
}

function createEarthOptionButton() {
  const borderOptionsElement = document.querySelector(borderOptionsID);
  const earthOptionButton = document.createElement('button');
  earthOptionButton.id = 'earth';
  earthOptionButton.className = borderOptionClass;
  borderOptionsElement.appendChild(earthOptionButton);
}

function initialize() {
  createHeaderContent();
  createTextInput();
  createImageInput();
  createMemeImageContainer();
  createMemeTextContainer();
  createMemeText();
  createMemeImage();
  createBorderOptions();
  createFireOptionButton();
  createWaterOptionButton();
  createEarthOptionButton();
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

const fireOptionButtonElement = document.querySelector('#fire');

function applyFireOption() {
  const memeImageContainerElement = document.querySelector(memeImageContainerID);
  memeImageContainerElement.style.border = '3px dashed red';
}
fireOptionButtonElement.addEventListener('click', applyFireOption);

const waterOptionButtonElement = document.querySelector('#water');

function applyWaterOption() {
  const memeImageContainerElement = document.querySelector(memeImageContainerID);
  memeImageContainerElement.style.border = '5px double blue';
}
waterOptionButtonElement.addEventListener('click', applyWaterOption);

const earthOptionButtonElement = document.querySelector('#earth');

function applyEarthOption() {
  const memeImageContainerElement = document.querySelector(memeImageContainerID);
  memeImageContainerElement.style.border = '6px groove green';
}
earthOptionButtonElement.addEventListener('click', applyEarthOption);
