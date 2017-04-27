'use strict';

// Game constructor
function Game(cardCount) {
  this.theme;
  this.cardCount = cardCount;
  this.clickCount = 0;
  this.guessCount = 0;
  this.correctCount = 0;
  this.startTime = new Date();
  this.endTime;
  this.time;
  this.done = false;
  this.cards = makeGameCards(cardCount, test);
}

// Game end
Game.prototype.finish = function() {
  if (this.cardCount === this.correctCount) {
    this.done = true;
    this.endTime = new Date();
    this.time = this.endTime - this.startTime;
  }
}

// Game match: takes two clicks and compares them
Game.prototype.matchCards = function() {
  if (this.clickCount > 1) {
    console.log('clickCount reached 2');
    this.clickCount = 0;
  }
}

// Populate DOM with card elements
Game.prototype.makeCardEls = function() {
  let template = Handlebars.compile($('#card-template').html());
  this.cards.forEach(function(cardEl) {
    $('#gameboard').append(template(cardEl));
  })
}
