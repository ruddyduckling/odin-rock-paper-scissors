/* Computer randomly selects Rock, Paper, or Scissors
        random number between 1 and 3.
        assign each number corresponding choice
User inputs their choice
User choice compared to computer choice */

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    return 'Rock';
  }
  else if (num === 2) {
    return 'Paper';
  }
  else {
    return 'Scissors';
  }
}

function getPlayerChoice() {
  let choice = prompt('Rock, Paper or Scissors? ');
  choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

  if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
    return choice;
  }

  else {
    alert("Please enter a valid choice.");
    getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Its a tie, play again!");
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    alert("You Lose! Paper beats Rock!");
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    alert("You Win! Rock beats Scissors!");
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert("You Win! Paper beats Rock!");
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    alert("You Lose! Scissors beats Paper!");
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    alert("You Lose! Rock beats Scissors!");
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    alert("You Win! Scissors beats Rock!");
  }
  else {
    alert("Something weird happened. Time to debug!");
  }
}

playRound(getPlayerChoice(), getComputerChoice());