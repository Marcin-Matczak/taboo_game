// Card rendering

export const cardContainer = document.querySelector('.card');

export const cardRender = function (card) {
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
