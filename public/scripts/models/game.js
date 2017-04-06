'use strict';

// Game constructor
function Game(cardCount) {
  this.theme;
  this.cardCount = cardCount;
  this.guessCount = 0;
  this.correctCount = 0;
  this.time;
  this.done = false;
}

Game.prototype.finish = function() {
  if (this.cardCount === this.correctCount) {
    this.done = true;
  }
}
