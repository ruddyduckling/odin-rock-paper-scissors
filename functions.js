/* Computer randomly selects Rock, Paper, or Scissors
        random number between 1 and 3.
        assign each number corresponding choice
User inputs their choice
User choice compared to computer choice */

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3 + 1);

  if (choiceNum === 1) {
    return 'Rock';
  }
  else if (choiceNum === 2) {
    return 'Paper';
  }
  else {
    return 'Scissors';
  }
}


function getPlayerChoice() {
  let choice = "";

  while (choice != 'Rock' || choice != 'Paper' || choice != 'Scissors') {

    choice = prompt('Rock, Paper or Scissors? ');
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
      return choice;
    }

    else {
      alert("Please enter a valid choice.");
    }
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie, play again!";
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return "You Lose! Paper beats Rock!";
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return "You Win! Rock beats Scissors!";
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return "You Win! Paper beats Rock!";
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return "You Lose! Scissors beats Paper!";
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return "You Lose! Rock beats Scissors!";
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return "You Win! Scissors beats Rock!";
  }
  else {
    alert("Something weird happened. Time to debug!");
    console.warn("Something weird in the playRound function!");
  }
}


function game() {
  let playerWins = 0,
      computerWins = 0,
      ties = 0,
      round = 1;

  for (i = 1 ; i <= 5 ; i++) {

      scorecard(round, playerWins, computerWins, ties);
      round++

      let result = playRound(getPlayerChoice(), getComputerChoice());
      
      if (result.includes("Win")) {
        console.log("Win");
        playerWins ++;
      }
      else if (result.includes("Lose")) {
        console.log("Lose");
        computerWins ++;
      }
      else if (result.includes("tie")) {
        console.log("Tie");
        ties ++;
      }
      else {
        alert("Something\'s wrong");
        console.warn("Something went wrong in result algorithm");
      }
  }
  
  gameOver(round, playerWins, computerWins, ties);
}


function scorecard(round, playerWins, computerWins, ties) {
  alert(`Start round ${round}
    Player Wins: ${playerWins}.
    PC Wins: ${computerWins}
    Ties: ${ties}`);
}

function gameOver(round, playerWins, computerWins, ties) {
  let winner = 'Everybody';
  if (playerWins > computerWins) {
    winner = "You";
  }
  else if (playerWins < computerWins) {
    winner = "Computer"
  }

  alert(`Game Over! Winner: ${winner}!
    Player Wins: ${playerWins}.
    PC Wins: ${computerWins}
    Ties: ${ties}`);
}