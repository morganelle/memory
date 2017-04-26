'use strict';

// Launch game by button
var gameStartEl = document.getElementById('gamestart');
gameStartEl.addEventListener('click', newGame, false);

function newGame() {
  console.log('newGame');
  var cake = new Game(8);
  makeCard(8, test);
  makeCardsAll(cards);
  makeCardEls();
}
