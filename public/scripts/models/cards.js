'use strict';

// Array of cards with 1 instance of each
let test = ['a', 'b', 'c', 'd','e','f','g', 'h']; //delete when there are art options

// Card constructor
function Card(art, id) {
  this.art = art;
  this.id = id;
}

// Instantiates new cards
function makeCard(cardCount, art) {
  let cards = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(new Card(art[i], i));
  }
  return cards;
}

// Creates card elements from card objects
function makeCardsAll(cardArr) {
  var cardEls = cardArr.map((card) => [card, card]).reduce((a, b) => a.concat(b),[]);
  shuffle(cardEls);
  return cardEls;
}

// Shuffles an array in place
function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
}

function makeGameCards(cardCount, art) {
   return makeCardsAll(makeCard(cardCount, art));
}
