
const choices = document.querySelectorAll('.choice');
choices.forEach ((choice) => {
  choice.addEventListener('click', () =>{
    let winner = playRound(choice.id, getComputerChoice());
    console.log(winner);
  });
});


function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3 + 1);

  if (choiceNum === 1) {
    console.log(`cpu choice: rock`);
    return 'rock';
  }
  else if (choiceNum === 2) {
    console.log(`cpu choice: paper`);
    return 'paper';
  }
  else {
    console.log(`cpu choice: scissors`);
    return 'scissors';
  }
}


function playRound(playerSelection, computerSelection) {
  let winner = '';

  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = 'player';
    } 
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winner = 'player';
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = 'player';

  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winner = 'cpu';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winner = 'cpu';
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    winner = 'cpu';
  }

  return winner;
}

