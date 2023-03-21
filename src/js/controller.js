import { tabooCards } from './model.js';
import { clearCardContent } from './helpers.js';
import { cardRender } from './view.js';

// Buttons

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const drawBtn = document.querySelector('.draw');

//  Currently displayed card and time

let currCard;
let timer;

// Reset timer

const resetTimer = function () {
  if (timer) clearInterval(timer);
  timer = startTimer();
  timerContainer.classList.remove('timerun');
  cardContainer.classList.remove('blur');
};

// Random Card

const randomCard = function () {
  let randomNumber = Math.floor(Math.random() * tabooCards.length);
  currCard = tabooCards[randomNumber];
  cardRender(currCard);
  resetTimer();
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
  resetTimer();
};

const previousCard = function () {
  let currIndex = tabooCards.indexOf(currCard);
  let prevOne = {};
  currCard === tabooCards.at(0)
    ? (prevOne = tabooCards.at(-1))
    : (prevOne = tabooCards[currIndex - 1]);
  cardRender(prevOne);
  currCard = prevOne;
  resetTimer();
};

// Card change timer

const timerContainer = document.querySelector('.timer');
const cardContainer = document.querySelector('.card');

const startTimer = function () {
  let time = 120;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timerContainer.textContent = `${min}:${sec}`;
    if (time === 10) timerContainer.classList.add('timerun');
    if (time === 0) {
      cardContainer.classList.add('blur');
      return;
    }
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// EventListeners buttons

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    clearCardContent();
    nextCard();
  }
  if (e.key === 'ArrowLeft') {
    clearCardContent();
    previousCard();
  }
});

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

// Initialization

const init = function () {
  randomCard();
};
init();
