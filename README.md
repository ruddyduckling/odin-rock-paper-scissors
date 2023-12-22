<<<<<<< HEAD
TOP - ROCK PAPER SCISSOR - part 2

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
=======
Objective: Make a rock, paper, scissors game.  The user inputs choices to play against
the computer choices. After 5 rounds, winner is displayed.

Instructions from Odin:

Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). 
This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly
return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the 
playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other 
variation).
Account for TIES by re-playing the round.
Important note: you want to return the results of this function call, not console.log() them. 
You’re going to use what you return later on, so let’s test this function by using console.log to see the results:


Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that 
keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops 
from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! 
Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value 
to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
>>>>>>> 2e0ee6b794f8b2f5804cc330035c74c53607e2d3
