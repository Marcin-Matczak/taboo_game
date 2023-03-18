const tabooCards = [
  {
    answer: 'goldfish',
    tabooWords: ['bowl', 'pet', 'swim', 'orange', 'memory'],
  },

  {
    answer: 'tart',
    tabooWords: ['pop', 'taste', 'sour', 'pastry', 'fruit'],
  },
  {
    answer: 'houdini',
    tabooWords: ['magic', 'escape', 'dangerous', 'stunt', 'harry'],
  },
];

// Buttons

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const drawBtn = document.querySelector('.random');

const cardContainer = document.querySelector('.card');
let randomNumber = Math.floor(Math.random() * tabooCards.length);
let repeatedCard = [];

let currCard;

const cardRender = function (card) {
  const { answer, tabooWords } = card;
  const tabooAnswer = answer.toUpperCase();

  const answerElement = `
    <div class="card__answer">
      <h2>${tabooAnswer}</h2>
    </div> 
    <div class="card__tabooWords">
      <ul>
      </ul>
    </div>
  `;

  cardContainer.insertAdjacentHTML('beforeend', answerElement);
  const listContainer = document.querySelector('.card__tabooWords ul');
  tabooWords.forEach(word => {
    word = word.at(0).toUpperCase() + word.slice(1);
    const li = document.createElement('li');
    li.innerText = word;
    listContainer.appendChild(li);
  });
};

const checkCard = function () {
  return repeatedCard.includes(randomNumber)
    ? (randomNumber = Math.floor(Math.random() * tabooCards.length))
    : console.log('All card were used!');
};

const randomCard = function () {
  checkCard();
  repeatedCard.push(randomNumber);
  currCard = tabooCards[randomNumber];
  cardRender(currCard);
  console.log(repeatedCard);
};

randomCard();

const nextCard = function () {
  currIndex = tabooCards.indexOf(currCard);
  let nextOne = {};
  currCard === tabooCards.at(-1)
    ? (nextOne = tabooCards[0])
    : (nextOne = tabooCards[currIndex + 1]);
  cardRender(nextOne);
  currCard = nextOne;
};

const previousCard = function () {
  currIndex = tabooCards.indexOf(currCard);
  let nextOne = {};
  currCard === tabooCards.at(0)
    ? (nextOne = tabooCards.at(-1))
    : (nextOne = tabooCards[currIndex - 1]);
  cardRender(nextOne);
  currCard = nextOne;
};

const clearCardContent = function () {
  cardContainer.innerHTML = '';
};

nextBtn.addEventListener('click', function (e) {
  clearCardContent();
  nextCard();
});

previousBtn.addEventListener('click', function (e) {
  clearCardContent();
  previousCard();
});

drawBtn.addEventListener('click', function () {
  clearCardContent();
  randomCard();
});

console.log(currCard);
