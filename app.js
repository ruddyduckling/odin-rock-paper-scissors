const playerDisplay = document.querySelector('.player-display');
const cpuDisplay = document.querySelector('.cpu-display');
const message = document.querySelector('.message');
const winnerMessage = document.createElement('p');

const choices = document.querySelectorAll('.choice')
choices.forEach((choice) => {
  choice.addEventListener('click', ()=> {
    game(choice.id)
  });
});


let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * choices.length + 1);

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

function playRound(playerSelection, cpuSelection) {
  console.log(`player choice: ${playerSelection}`)
  if (playerSelection === 'scissors' && cpuSelection === 'paper') {
    playerScore++;
    return `You Win! ${playerSelection} beats ${cpuSelection}`;
    } 
  else if (playerSelection === 'rock' && cpuSelection === 'scissors') {
    playerScore++;
    return `You Win! ${playerSelection} beats ${cpuSelection}`;
  }
  else if (playerSelection === 'paper' && cpuSelection === 'rock') {
    playerScore++;
    return `You Win! ${playerSelection} beats ${cpuSelection}`;
  }
  else if (playerSelection === 'paper' && cpuSelection === 'scissors') {
    cpuScore++;
    return `You Lose! ${cpuSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === 'scissors' && cpuSelection === 'rock') {
    cpuScore++;
    return `You Lose! ${cpuSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === 'rock' && cpuSelection === 'paper') {
    cpuScore++;
    return `You Lose! ${cpuSelection} beats ${playerSelection}`;
  }
  else {
    return `Draw. Both picked ${playerSelection}`;
  }
  
}

function game(choice) {
  winnerMessage.textContent = playRound(choice, getComputerChoice());
  message.appendChild(winnerMessage);

  playerDisplay.textContent = `You: ${playerScore}`;
  cpuDisplay.textContent = `CPU: ${cpuScore}`;

  if (playerScore === 5){
    winnerMessage.textContent = 'Congratulations, you beat a computer...';
    gameOver();
  }
  else if (cpuScore === 5) {
    winnerMessage.textContent = 'Dang, you lost to a computer...';
    gameOver();
  }
}

function gameOver() {
  playerScore = 0;
  cpuScore = 0;
  const gameOverMessage= document.createElement('p');
  gameOverMessage.textContent = 'Pick a choice to start another game to 5!';
  message.appendChild(gameOverMessage);
}