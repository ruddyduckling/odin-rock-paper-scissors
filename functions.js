/* Computer randomly selects Rock, Paper, or Scissors
        random number between 1 and 3.
        assign each number corresponding choice
User inputs their choice
User choice compared to computer choice */

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    let choice = 'Rock';
    console.log("Computer Choice is Rock.");
  }
  else if (num === 2) {
    let choice = 'Paper';
    console.log("Computer Choice is Paper.");
  }
  else {
    let choice = 'Scissors';
    console.log("Computer Choice is Scissors.");
  }
}

function getPlayerChoice() {
  let choice = prompt('Rock, Paper or Scissors? ');
  choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

  if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
    console.log(`Player Choice is ${choice}.`);
    return choice;
  }

  else {
    alert("Please enter a valid choice.");
    getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {

}