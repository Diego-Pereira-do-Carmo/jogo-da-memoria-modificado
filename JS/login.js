// selecionando o input e o botão do html
let input = document.querySelector('.login_input');
let playerExists = document.querySelector('.player_exists');
let button = document.querySelector('.login_button');
let form = document.querySelector('.login_form');

let players = JSON.parse(localStorage.getItem('playersData')) || [];

// função para validar o nome do jogador
const validadeInput = (event) => {
  let ValidadePlayer = event.target.value

  if (ValidadePlayer.length >= 3) {
    button.removeAttribute('disabled')
    return
  }
  button.setAttribute('disabled', '')
}


const handleSubmit = (event) => {
  event.preventDefault();

  let playerTime = input.value;
  let namePlayer = input.value;
  const findPlayers = players.find(player => player.name === playerTime);

  if (findPlayers === undefined) {

    players.push({
      name: playerTime,
      moves: 0
    });
    window.location = '../pages/main.html';

  } else {
    playerExists.innerHTML = `<p> Jogador ${playerTime} já existe</p>
                              <h4>DESEJA CONTINUAR</h4>
                              <div class="confirmPlayer">
                              <button class="playerYes" onclick="confirmName()">SIM</button>
                              <button class="playerNo" onclick="setNewName()">NÃO</button>
                              </div>`;

    button.setAttribute('disabled', '')
   
  }

  localStorage.setItem('playersData', JSON.stringify(players));
  localStorage.setItem('inputValue', JSON.stringify(namePlayer));

  // input.value = '';
}

function confirmName() {
  window.location = '../pages/main.html';
}

function setNewName() {
  input.value = '';
 
  playerExists.innerHTML = `<small class="newName">Digite um Novo Nome!!!</small>`
}


//adicionando o ouvinte de evento ao input, e chamando a função validadeInput para ser executada 
// quando tiver um evento do tipo input
input.addEventListener('input', validadeInput);

//adicionando o ouvinte de evento no formulario, para salvar as informações 
// do jogador
form.addEventListener('submit', handleSubmit);