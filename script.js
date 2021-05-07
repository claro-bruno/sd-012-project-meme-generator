const content = document.createElement('div');
content.className = 'content';
document.body.appendChild(content);

const textContainer = document.createElement('div');
textContainer.className = 'text-container';

content.appendChild(textContainer);

const labelText = document.createElement('label');
labelText.htmlFor = 'text-input';

const inputText = document.createElement('input');
inputText.type = 'text';
inputText.id = 'text-input';

textContainer.appendChild(labelText);
textContainer.appendChild(inputText);

const memeImageContainer = document.createElement('div');
memeImageContainer.id = 'meme-image-container';

content.appendChild(memeImageContainer);

const memeText = document.createElement('div');
memeText.id = 'meme-text';

memeImageContainer.appendChild(memeText);

function insertMemeText(event) {
  memeText.innerHTML = event.target.value;
}

inputText.addEventListener('input', insertMemeText);

const memeImage = document.createElement('img');
memeImage.id = 'meme-image';

memeImageContainer.appendChild(memeImage);

const memeInsert = document.createElement('input');
memeInsert.required = true;
memeInsert.type = 'file';
memeInsert.id = 'meme-insert';

textContainer.appendChild(memeInsert);

function renderImage() {
  const fileReader = new FileReader();
  const path = memeInsert.files[0];

  fileReader.onloadend = () => {
    memeImage.src = fileReader.result;
  };
  fileReader.readAsDataURL(path);
}

memeInsert.addEventListener('change', renderImage);
