// selecionando o input e o botão do html
let input = document.querySelector('.login_input');
let playerExists = document.querySelector('.player_exists');
let button = document.querySelector('.login_button');
let form = document.querySelector('.login_form')

let players = JSON.parse(localStorage.getItem('playersData')) || [];

// função para validar o nome do jogador
const validadeInput = (event) => {
  let ValidadePlayer = event.target.value

  if (ValidadePlayer.length >= 3) {
    button.removeAttribute('disabled')
    checkRepeatedPlayer();
    return
  }
  button.setAttribute('disabled', '')
  playerExists.innerHTML = `<p></p>`;

}

function checkRepeatedPlayer() {

  if (players.includes(input.value) == true){
    playerExists.innerHTML = `<p> Jogador ${input.value} já existe</p>`;
  } else{
    playerExists.innerHTML = `<p> Jogador ${input.value} disponivel</p>`;
  }


}


const handleSubmit = (event) => {
  event.preventDefault();
  // checkRepeatedPlayer();

  if (players.includes(input.value) == false){
    players.push(input.value);
  } 

  localStorage.setItem('playersData', JSON.stringify(players));
  
  window.location = '../pages/main.html';
}

//adicionando o ouvinte de evento ao input, e chamando a função validadeInput para ser executada 
// quando tiver um evento do tipo input
input.addEventListener('input', validadeInput);

//adicionando o ouvinte de evento no formulario, para salvar as informações 
// do jogador
form.addEventListener('submit', handleSubmit);