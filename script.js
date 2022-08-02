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
