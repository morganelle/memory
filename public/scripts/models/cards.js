'use strict';
// app.js is a temporary file to get started

var cards = [];

function Card(art, id) {
  this.art = art;
  this.id = id;
}

function makeCard(cardCount, art) {
  for (var i = 0; i < cardCount; i++) {
    cards.push(new Card(art[i], i));
  }
}
