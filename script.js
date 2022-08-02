let blackColor = document.querySelector('.color');
blackColor.style.backgroundColor = 'black';
let redColor = document.querySelector('#color-palette').firstElementChild.nextElementSibling;
redColor.style.backgroundColor = 'red';
let blueColor = redColor.nextElementSibling;
blueColor.style.backgroundColor = 'blue';
let greenColor = blueColor.nextElementSibling;
greenColor.style.backgroundColor = 'green';

blackColor.addEventListener('click', addClass);
redColor.addEventListener('click', addClass);
blueColor.addEventListener('click', addClass);
greenColor.addEventListener('click', addClass);
function addClass(event) {
  blackColor.classList.remove('selected');
  redColor.classList.remove('selected');
  blueColor.classList.remove('selected');
  greenColor.classList.remove('selected');   
  event.target.classList.add('selected');
};

let board = document.querySelector('#pixel-board');
let pixel = document.querySelector('.color');
let colorSelected = document.querySelectorAll('.color');
board.addEventListener('click', (event) => {
  for (let index = 0; index < colorSelected.length; index += 1) {
    let pixelColor = colorSelected[index].style.backgroundColor;  
    if (colorSelected[index].className === 'color selected' && event.target.style.color !== pixelColor && event.target.className === 'pixel') {
      event.target.style.backgroundColor = pixelColor;         
    }
  }
});

let btnClear = document.querySelector('#clear-board');
let pixelBox = document.querySelectorAll('.pixel');
let primaryColor = 'white';
//let input = document.querySelector('#board.size');
btnClear.addEventListener('click', function() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    if (pixelBox[index].style.backgroundColor !== primaryColor) {
      pixelBox[index].style.backgroundColor = primaryColor;
    }  
  }
});

let btnGenBoard = document.querySelector('#generate-board');
btnGenBoard.addEventListener('click', function() {
  let numOfPixel = document.getElementById('board-size').value;
  let lines = document.querySelectorAll('.line');
  let pixels = document.querySelectorAll('.pixel');

  if (numOfPixel === '') {
    alert('Board inválido!')
  } else {
    for (let index = 0; index < pixels.length; index += 1){
      pixels[index].remove();
    }
    for (let index2 = 0; index2 < lines.length; index2 += 1) {
      lines[index2].remove();
    };

    let num = parseInt(numOfPixel);         
    for (let index3 = 0; index3 < num; index3 += 1) {
      let divLine = document.createElement('div');
      divLine.className = 'line';
      board.appendChild(divLine);
      for (let index4 = 0; index4 < num; index4 += 1) {
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel'
        divLine.appendChild(divPixel);
      }    
    }
  }
});

function generateColors() {
  redColor.style.backgroundColor = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' +Math.random()*255 + ')';
  blueColor.style.backgroundColor = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' +Math.random()*255 + ')';
  greenColor.style.backgroundColor = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' +Math.random()*255 + ')';
  
}
window.onload = function() {
  generateColors();
};