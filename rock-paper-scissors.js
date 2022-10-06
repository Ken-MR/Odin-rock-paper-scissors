/* below are the various functions and commands used to play a game of rock, paper, scissors
    against the computer */

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // generates random number from 1 to 3
    if (choice === 1) { // uses number to pick which option the computer will play
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let computerSelection = getComputerChoice();

console.log('The computer plays ' + computerSelection);