import { tabooCards } from './model.js';
import { clearCardContent } from './helpers.js';
import { cardRender } from './view.js';

// Buttons

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const drawBtn = document.querySelector('.random');

let currCard;

// Random Card

const randomCard = function () {
  let randomNumber = Math.floor(Math.random() * tabooCards.length);
  currCard = tabooCards[randomNumber];
  cardRender(currCard);
};

// Next & Previous Cards

const nextCard = function () {
  let currIndex = tabooCards.indexOf(currCard);
  let nextOne = {};
  currCard === tabooCards.at(-1)
    ? (nextOne = tabooCards[0])
    : (nextOne = tabooCards[currIndex + 1]);
  cardRender(nextOne);
  currCard = nextOne;
};

const previousCard = function () {
  let currIndex = tabooCards.indexOf(currCard);
  let nextOne = {};
  currCard === tabooCards.at(0)
    ? (nextOne = tabooCards.at(-1))
    : (nextOne = tabooCards[currIndex - 1]);
  cardRender(nextOne);
  currCard = nextOne;
};

// EventListeners buttons

nextBtn.addEventListener('click', function () {
  clearCardContent();
  nextCard();
});

previousBtn.addEventListener('click', function () {
  clearCardContent();
  previousCard();
});

drawBtn.addEventListener('click', function () {
  clearCardContent();
  randomCard();
});

const init = function () {
  randomCard();
};

init();
