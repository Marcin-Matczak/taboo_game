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

const cardContainer = document.querySelector('.card');

let randomCard = Math.floor(Math.random() * tabooCards.length);

const currCard = tabooCards[randomCard];

const cardRender = function (card) {
  const { answer, tabooWords } = card;
  const answerElement = `
    <div class="card__answer">
      <h2>${answer}</h2>
    </div> 
    <div class="card__tabooWords">
      <ul>
      </ul>
    </div>
  `;

  cardContainer.insertAdjacentHTML('beforeend', answerElement);
  const listContainer = document.querySelector('.card__tabooWords ul');
  console.log(listContainer);

  const taboWordsElement = tabooWords.forEach(word => {
    const li = document.createElement('li');
    li.innerText = word;
    listContainer.appendChild(li);
  });
};

cardRender(currCard);
