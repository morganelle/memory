'use strict';

// Launch game by button
var gameStartEl = document.getElementById('gamestart');
var gameBoardEl = document.getElementById('gameboard');
gameStartEl.addEventListener('click', newGame, false);

function newGame() {
  // clear();
  new Game(8);
  makeGameCards(8, test, cards);
}

// function clear(){
//   console.log('clear function',gameBoardEl.childNodes);
//   while (gameBoardEl.firstChild) {
//     gameBoardEl.removeChild(gameBoardEl.firstChild);
//   }
// }
