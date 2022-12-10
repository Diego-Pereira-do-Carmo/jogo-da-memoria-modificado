const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon"

// iniciando o game
startGame();

// funcão responsavel por começar o jogo
function startGame() {
  initializeCards(game.createCardsFromTechs());
}

// iniciando as cartas
function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = '';

  game.cards.forEach((card) => {
    let cardElement = document.createElement('div');
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;


    createCardContent(card, cardElement);
    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement);
  })
}

// criando as faces das cartas
function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

// criando as cartas
function createCardFace(face, card, element) {
  let cardElementFace = document.createElement('div');
  cardElementFace.classList.add(face);

  if (face === FRONT) {
    let iconElement = document.createElement('img');
    iconElement.classList.add(ICON);
    iconElement.src = "../images/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    let iconElement = document.createElement('img');
    iconElement.classList.add(ICON);
    iconElement.src = `../images/github.svg`;
    cardElementFace.appendChild(iconElement);
  }
  element.appendChild(cardElementFace);
}

function flipCard() {

  if (game.setCard(this.id)) {

    this.classList.add("flip");

    if (game.secondCard) {
      game.amountOfMovementes += 1;
      markingOfMovements();

      if (game.checkMatch()) {
        disableCard();  
        game.clearCards();
        if (game.checkGameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = 'flex';
        }      
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let SecondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove('flip');
          SecondCardView.classList.remove('flip');
          game.unflipCards();
        }, 1000);
      };
    }
  }
}

function disableCard(){
  if (game.checkMatch() == true){
   
    let firstCardView = document.getElementById(game.firstCard.id);
    let SecondCardView = document.getElementById(game.secondCard.id);

    firstCardView.firstChild.classList.add('disable_card');
    SecondCardView.firstChild.classList.add('disable_card');
  }
  
}

function markingOfMovements(){
  let amountMoves = document.getElementById('amountMoves');
  let playerName = document.getElementById('playerName');

  // playerName.innerHTML = ` <p>Jogador: ${}</p>`
  amountMoves.innerHTML = `<p>movimentos: ${game.amountOfMovementes}</p>`

}


function restart() {
  game.amountOfMovementes = 0;
  markingOfMovements();
  game.clearCards();
  startGame();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = 'none';

  window.location = '../pages/index.html';
}