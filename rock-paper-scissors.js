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

function determineWinner(player, computer) {
    if ((player === "rock") && (computer === "paper")) {
        console.log('Paper covers rock!');
        return "defeat";
    }
    else if ((player === "scissors") && (computer === "rock")) {
        console.log('Rock beats scissors!');
        return "defeat";
    }
    else if ((player === "paper") && (computer === "scissors")) {
        console.log('Scissors cuts paper!');
        return "defeat";
    }
    else if ((player === "paper") && (computer === "rock")) {
        console.log('Paper covers rock!');
        return "victory";
    }
    else if ((player === "rock") && (computer === "scissors")) {
        console.log('Rock beats scissors!');
        return "victory";
    }
    else if ((player === "scissors") && (computer === "paper")) {
        console.log('Scissors cuts paper!');
        return "victory";
    }
}

function playRound(player) {
    let computer = getComputerChoice(); // gets computer choice
    if (player === computer) {  // verifies a tie hasn't occurred 
        console.log('You both played ' + player + '. Go again.')
        return;
    }
    console.log('You play ' + player);
    console.log('The computer plays ' + computer);

    return determineWinner(player, computer);
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let victor = '';
    let playerSelection = '';
    let computerSelection = '';

   // for (let i = 0; i < 5; i++){  commented out so max round number isn't tallied
        playerSelection = getPlayerSelection();
        console.log('You chose ' + playerSelection);
        computerSelection = getComputerChoice();
        console.log('Okay, rock, paper, scissors, shoot!');
        victor = playRound(playerSelection, computerSelection);
        if (victor === "victory") {
            playerPoints++;
            console.log('You won! The score is ' + playerPoints + ' to ' + computerPoints + '.');
        }
        else {
            computerPoints++;
            console.log('You lost. The score is ' + playerPoints + ' to ' + computerPoints + '.')
        }
   /* }
    if (computerPoints > playerPoints) {    commented out so victory isn't calculated
        console.log('You lost, better luck next time.');
    }
    else {
        console.log('You won! Congratulations!');
    }*/
}

console.log("Let's play rock, paper, scissors.");


//game();   commented out so rounds are not set

const rock = document.querySelector('#rock');   // query selectors to read each potential input
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound("rock");
});

paper.addEventListener('click', () => {
    playRound("paper");
});

scissors.addEventListener('click', () => {
    playRound("scissors");
});
