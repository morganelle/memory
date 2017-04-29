'use strict';

let currentGame = {};

// Launch game by button
let gameStartEl = document.getElementById('gamestart');
let gameBoardEl = document.getElementById('gameboard');
gameStartEl.addEventListener('click', newGame, false);

// Start a new game
function newGame() {
  $('#gameboard').empty();
  currentGame = new Game(8);
  currentGame.makeCardEls();
}

// Add event listeners to all cards
function cardEventListeners() {
  let allCards = $("div.card").toArray();
  let unmatchedCards = $("div[data-status='false']").toArray();
  allCards.forEach(function(card) {
    card.removeEventListener('click', gameClickHandler, false);
  });
  unmatchedCards.forEach(function(card) {
    card.addEventListener('click', gameClickHandler, false);
  });
}

function gameClickHandler(event) {
    currentGame.round.push(event.target.getAttribute('data-card'));
    currentGame.clickCount++;
    event.target.className += ' clicked';
    currentGame.matchCards();
}
