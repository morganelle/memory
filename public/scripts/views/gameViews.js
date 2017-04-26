'use strict';

var currentGame = {};

// Launch game by button
var gameStartEl = document.getElementById('gamestart');
var gameBoardEl = document.getElementById('gameboard');
gameStartEl.addEventListener('click', newGame, false);

function newGame() {
  clear();
  currentGame = new Game(8);
  currentGame.makeCardEls();
}

function clear(){
  $('#gameboard').empty();
}
