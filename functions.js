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
    console.warn("Something weird in the playRound function!")
  }
}

/*TODO: Redo game() function so that it works properly
Right now, it functions properly, but I cannot get it 
output an alert message with the final stats. */

function game() {
  let playerWins = 0,
        computerWins = 0,
        draws = 0,
        round = 0,
        result;

    while (playerWins < 3 ) {
      if(computerWins < 3) {
        round ++;
        alert(`Starting round ${round}.
              Player Wins: ${playerWins}.
              PC Wins: ${computerWins}.
              Draws: ${draws}`);

        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        
        
        if (result.includes("Win")) {
          playerWins ++;
          alert("win");
        }
        else if (result.includes("Lose")) {
          computerWins ++;
          alert("lose");
        }
        else if (result.includes("tie")) {
          alert("It's a tie, play again!");
          draws ++;
        }
      }
    }
}


