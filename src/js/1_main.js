'use strict';
// * ******** 1.Creo un unico elemento DIV en el HTML que contendrá mi tablero
const board = document.querySelector('.js_board');
const score = document.querySelector('.js_score');
const result = document.querySelector('.js_result');
let elementChosen = [];
let elementChosenId = [];
let cardsWon = [];
let initialScore = 0;

// **********  2. Recorre array de forma aleatoria (0_data.js)
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

/* *********  3. Recorro array segun longitud. son 24 objetos Así no tengo que pintar cadrado por cuadrado sino recorriendo mi array, pinto automaticamente cada cuadrado
A cada objeto le agego un elemento IMG / y a ese elemento le incluyo dos atributos SRC , ID
tambien le agrego clase para los estilos
Este elemento IMG lo tengo que agregar a un elemento del HTML que es BOARD al que he llamado inicialmente
A cada elementos le agrego un listener CLICK y una funcion para manejar dicho click

*/
function printBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    const element = document.createElement('img');
    element.setAttribute('src', 'assets/images/blank.jpg');
    element.setAttribute('id', i);
    element.classList.add('imageStyle');
    board.appendChild(element);
    element.addEventListener('click', handleClickElement);

    console.log(element);
  }
}
printBoard();

/* *********  5. gestiono las coincidencias
5.a -- guardo en una constante todos los elementos que contienen el elemento IMG
5.b -- si el dato del array donde he guardado el nombre en posicion 0 y 1 
      5.b.a -- por cada dato que contiene el elemento IMG  --> cada ID de cada elemento en la posicion 0 y 1 le agrego el atributo con la imagen OK , si COINCIDEN
      5.b.b -- si no coinciden le agrego la imagen BLANk
5.c -- agrego removeListener, porque sino puedo seguir clicando  y hace cosas raras
*/

function handleMatch() {
  const cards = document.querySelectorAll('img');
  const chosenIdOne = elementChosenId[0];
  const chosenIdTwo = elementChosenId[1];

  console.log(cards);
  if (elementChosen[0] === elementChosen[1]) {
    cards[chosenIdOne].setAttribute('src', 'assets/images/ok.png');
    cards[chosenIdTwo].setAttribute('src', 'assets/images/ok.png');
    cards[chosenIdOne].removeEventListener('click', handleClickElement);
    cards[chosenIdTwo].removeEventListener('click', handleClickElement);
    cardsWon.push(elementChosen[0], elementChosen[1]);

    console.log(cardsWon);
    console.log(imageArray);
  } else {
    cards[chosenIdOne].setAttribute('src', 'assets/images/blank.jpg');
    cards[chosenIdTwo].setAttribute('src', 'assets/images/blank.jpg');
  }

  handleScore();
  winLose();

  elementChosen = [];
  elementChosenId = [];
}
//como yo lo hubiera hecho, pero da ERROR

/*function handleMatch() {
  if (elementChosen[0] === elementChosen[1]) {
    elementChosen[0].createElement('img');
    elementChosen[1].createElement('img');
    elementChosen[0].setAttribute('src', 'assets/images/ok.png');
    elementChosen[1].setAttribute('src', 'assets/images/ok.png');
  } else {
    elementChosen[0].createElement('img');
    elementChosen[1].createElement('img');
    elementChosen[0].setAttribute('src', 'assets/images/blank.jpg');
    elementChosen[1].setAttribute('src', 'assets/images/blank.jpg');
  }

  elementChosen = [];
}*/

function handleScore() {
  if (elementChosen[0] === elementChosen[1]) {
    initialScore += 100;
  } else {
    initialScore -= 60;
  }
  score.innerHTML = `${initialScore}`;
}

function winLose() {
  if (cardsWon.length === imageArray.length && initialScore > 0) {
    result.innerHTML = `You Win`;
  } else if (cardsWon.length === imageArray.length && initialScore < 0) {
    result.innerHTML = `You Lose`;
  }
}

/* ********   4. Funcion que controla el click sobre cada elemento
4.a -- Identifico que elemento he clicado
4.b -- guardo en una constante en nombre del elemento y en otro la imagen
4.c -- A ese elemento clicado le agrego el atributo SRC para guardar su imagen correspondiente
4.d -- creo dos arrays vacíos para guardar en uno el nombre y en otro el id
4.e -- Hago un condicional -- si el array de eleentos clicados tiene dos datos --> se aplica la funcion handlMatch a partir de 500ms
*/
function handleClickElement(event) {
  const clickedElement = event.currentTarget.id;
  const clickedInfo = imageArray[clickedElement].name;
  const clickedImg = imageArray[clickedElement].image;
  const elementUpDown = this.setAttribute('src', clickedImg);
  elementChosen.push(clickedInfo);
  elementChosenId.push(clickedElement);

  console.log(clickedElement);
  console.log(clickedInfo);
  console.log(elementChosen);
  if (elementChosen.length === 2) {
    setTimeout(handleMatch, 500);
  }
}

//otra forma de recoger el id sobre el que estoy clicando
/*function handleClickElement() {
  const clickedElement = this.getAttribute('id');
  console.log(clickedElement);
}*/
