'use strict';

var currentGame = {};

// Launch game by button
var gameStartEl = document.getElementById('gamestart');
var gameBoardEl = document.getElementById('gameboard');
gameStartEl.addEventListener('click', newGame, false);

// Start a new game
function newGame() {
  clear();
  currentGame = new Game(8);
  currentGame.makeCardEls();
}

// Empties gameboard of cards
function clear(){
  $('#gameboard').empty();
}

// Add event listeners to all cards
function cardEventListeners() {
  let cards = $('div.card').toArray();
  cards.forEach(function(card) {
    card.addEventListener('click', function(event) {
      console.log(event.target);
      currentGame.clickCount++;
      event.target.className += ' clicked';
      currentGame.matchCards();
    }, false);
  });
}
