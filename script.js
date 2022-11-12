const getInputText = document.getElementById('text-input');
const getInputMeme = document.getElementById('meme-insert');
const getMemeText = document.getElementById('meme-text');
const getMemeContainer = document.getElementById('meme-image-container');
const getMemeImage = document.getElementById('meme-image');
const getFireButton = document.getElementById('fire');
const getWaterButton = document.getElementById('water');
const getEarthButton = document.getElementById('earth');
const getThumbImagens = document.getElementsByClassName('thumb-image');
const getTopInput = document.getElementById('input-top-down');
const getLeftInput = document.getElementById('input-right-left');
const getPositionButton = document.getElementById('apply-position');
const fireConfig = '3px dashed rgb(255, 0, 0)';
const waterConfig = '5px double rgb(0, 0, 255)';
const earthConfig = '6px groove rgb(0, 128, 0)';

const setMemeText = () => {
  getInputText.addEventListener('keyup', () => {
    getMemeText.innerText = getInputText.value;
  });
};

setMemeText();

function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

const setMemeImage = () => {
  getInputMeme.addEventListener('change', readImage, false);
};

setMemeImage();

const setContentBorder = (place, config) => {
  place.addEventListener('click', () => {
    getMemeContainer.style.border = config;
  });
};

setContentBorder(getFireButton, fireConfig);
setContentBorder(getWaterButton, waterConfig);
setContentBorder(getEarthButton, earthConfig);

const setImagebyThumb = () => {
  for (let index = 0; index < getThumbImagens.length; index += 1) {
    getThumbImagens[index].addEventListener('click', (event) => {
      const srcImage = event.target.src;
      const altImage = event.target.alt;
      getMemeImage.setAttribute('src', srcImage);
      getMemeImage.setAttribute('alt', altImage);
    });
  }
};

setImagebyThumb();

const changeTextPosition = () => {
  getPositionButton.addEventListener('click', () => {
    console.log(getTopInput.value);
    const topInputValue = getTopInput.value;
    const leftInputValue = getLeftInput.value;
    if (
      topInputValue > 300 ||
      topInputValue < 0 ||
      leftInputValue > 300 ||
      leftInputValue < 0
    ) {
      alert(
        'Dados inválidos, valores acima de 300 ou menores que 0 não são aceitos'
      );
    } else {
      getMemeText.style.top = `${topInputValue}px`;
      getMemeText.style.left = `${leftInputValue}px`;
    }
    getTopInput.value = '';
    getLeftInput.value = '';
  });
};

changeTextPosition();
