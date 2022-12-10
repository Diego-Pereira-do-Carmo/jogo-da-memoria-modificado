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
  playerExists.innerHTML = `<p></p>`;
}


const handleSubmit = (event) => {
  event.preventDefault();

  const findPlayers = players.find(player => player.name === input.value);
  
  if (findPlayers === undefined){
    
    players.push({
      name: input.value,
      moves: 0
    });
    window.location = '../pages/main.html';
    
  } else {
    playerExists.innerHTML = `<p> Jogador ${input.value} ja existe</p>`;
  }

  localStorage.setItem('playersData', JSON.stringify(players));
  localStorage.setItem('inputValue', JSON.stringify(input.value));

  input.value = '';
}

//adicionando o ouvinte de evento ao input, e chamando a função validadeInput para ser executada 
// quando tiver um evento do tipo input
input.addEventListener('input', validadeInput);

//adicionando o ouvinte de evento no formulario, para salvar as informações 
// do jogador
form.addEventListener('submit', handleSubmit);