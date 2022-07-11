'use strict';
const board = document.querySelector('.js_board');

let itemBoard = '';
let itemImg = '';

//Recorre array de forma aleatoria, lo necesito apra que un lado de la cara de las fichas se cambie de forma aleatoria
//sort = ordena valores deun array en strings - segun unicode
imageArray.sort(() => 0.5 - Math.random());

console.log(imageArray);

//Recorro mi array para pintar el board con cada elemento del array
/*function printBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    let element = imageArray[i];
    console.log(element);
    itemBoard += `<img  ${element.image}/>`;
  }
  console.log(itemBoard);
  board.innerHTML += itemBoard;
}*/

function printBoard() {
  for (let i = 0; i < imageArray.length - 1; i++) {
    const element = document.createElement('img');
    element.setAttribute('src', 'assets/images/blank.jpg');
    element.setAttribute('id', i);
    element.classList.add('imageStyle');
    board.appendChild(element);
    console.log(element);
  }
}
printBoard();
