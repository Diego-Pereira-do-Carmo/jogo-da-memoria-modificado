let texto = document.getElementById('texto');
// let states = false;
let players = JSON.parse(localStorage.getItem('playersData')) || [];

// console.log(players[0].moves)
// function checkObj() {

//   players.forEach(function(item) {
// console.log(item + " - " + JSON.stringify(players[item]));
// console.log(players.valueOf()[item]);
// console.log(players[item])

// });

// for (let i = 0; i < players.length; i++) {
//   let nameCheck = players[i].nome;
//   if (nameCheck == texto.value) {
//     console.log(nameCheck);
//     states = true
//   } else {
//     console.log(nameCheck);
//     states = false
//   }
// }
// }

// function nameCheck() {
//   let filteredPlayers = players.filter(player => player.name.includes(texto.value));
//   console.log('log da funcção nameCheck ' + filteredPlayers);
// }


function enviar() {

  const findPlayers = players.find(player => player.name === texto.value);

  if (findPlayers === undefined) {

    console.log(findPlayers);

    console.log('jogador disponivel');

    players.push({
      name: texto.value,
      moves: 0
    });
  } else {
    ;console.log(findPlayers.name);
    console.log('jogador já existe')
  }

  // console.log(Object.values(players[1]))
  localStorage.setItem('playersData', JSON.stringify(players));

  texto.value = '';
}

let jogadores = [
  {name: "diego", moves: 0},
  {name: "larissa", moves: 0},
  {name: "camila", moves: 0},
  {name: "tom", moves: 0}
]

// const filteredUsers = jogadores.filter(p => p.name.includes("camila"));
// console.log(filteredUsers);

// const filtrarjogadores = jogadores.find(jogador => jogador.name === "marcos");
// console.log(filtrarjogadores);