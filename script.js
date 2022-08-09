const blackColor = document.querySelector('.color');
blackColor.style.backgroundColor = 'black';
const redColor = document.querySelector('#color-palette').firstElementChild.nextElementSibling;
redColor.style.backgroundColor = 'red';
const blueColor = redColor.nextElementSibling;
blueColor.style.backgroundColor = 'blue';
const greenColor = blueColor.nextElementSibling;
greenColor.style.backgroundColor = 'green';

function addClass(event) {
  blackColor.classList.remove('selected');
  redColor.classList.remove('selected');
  blueColor.classList.remove('selected');
  greenColor.classList.remove('selected');
  event.target.classList.add('selected');
}
blackColor.addEventListener('click', addClass);
redColor.addEventListener('click', addClass);
blueColor.addEventListener('click', addClass);
greenColor.addEventListener('click', addClass);

const board = document.querySelector('#pixel-board');
const colorSelected = document.querySelectorAll('.color');
const cN = 'color selected';
board.addEventListener('click', (event) => {
  const evt = event;
  for (let index = 0; index < colorSelected.length; index += 1) {
    const pC = colorSelected[index].style.backgroundColor;
    const cs = colorSelected[index];
    if (cs.className === cN && evt.target.className === 'pixel' && evt.target.style.color !== pC) {
      evt.target.style.backgroundColor = pC;
    }
  }
});

const btnClear = document.querySelector('#clear-board');
const primaryColor = 'white';
btnClear.addEventListener('click', () => {
  const pixelBox = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBox.length; index += 1) {
    if (pixelBox[index].style.backgroundColor !== primaryColor) {
      pixelBox[index].style.backgroundColor = primaryColor;
    }
  }
});

function sizeLimits(num) {
  const newNum = num;
  let oldNum = num;
  if (num < 5) {
    oldNum = 5;
  } else if (num > 50) {
    oldNum = 50;
  } else {
    oldNum = newNum;
  }
  return oldNum;
}

function removeBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const lines = document.querySelectorAll('.line');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
  for (let index2 = 0; index2 < lines.length; index2 += 1) {
    lines[index2].remove();
  }
}

function createBox(num) {
  for (let index3 = 0; index3 < num; index3 += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'line';
    board.appendChild(divLine);
    for (let index4 = 0; index4 < num; index4 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
  }
}

const btnGenBoard = document.querySelector('#generate-board');
btnGenBoard.addEventListener('click', () => {
  const numOfPixel = document.getElementById('board-size').value;
  if (numOfPixel === '') {
    alert('Board inválido!');
  } else {
    removeBoard();
    let num = parseInt(numOfPixel, 10);
    num = sizeLimits(num);
    createBox(num);
  }
});

function generateColors() {
  redColor.style.backgroundColor = `rgb(${Math.random()
    * 255},${Math.random() * 255},${Math.random() * 255})`;
  blueColor.style.backgroundColor = `rgb(${Math.random()
    * 255},${Math.random() * 255},${Math.random() * 255})`;
  greenColor.style.backgroundColor = `rgb(${Math.random()
    * 255},${Math.random() * 255},${Math.random() * 255})`;
}
window.onload = function initial() {
  generateColors();
};
