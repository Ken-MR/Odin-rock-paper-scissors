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
    let victor;
    if ((player === "rock") && (computer === "paper")) {
        roundResults.textContent = 'Paper covers rock!';
        computerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "defeat";
    }
    else if ((player === "scissors") && (computer === "rock")) {
        roundResults.textContent = 'Rock beats scissors!';
        computerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "defeat";
    }
    else if ((player === "paper") && (computer === "scissors")) {
        roundResults.textContent = 'Scissors cuts paper!';
        computerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "defeat";
    }
    else if ((player === "paper") && (computer === "rock")) {
        roundResults.textContent = 'Paper covers rock!';
        playerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "victory";
    }
    else if ((player === "rock") && (computer === "scissors")) {
        roundResults.textContent = 'Rock beats scissors!';
        playerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "victory";
    }
    else if ((player === "scissors") && (computer === "paper")) {
        roundResults.textContent = 'Scissors cuts paper!';
        playerPoints++;
        results.textContent = 'The current score is\n' +
        'Player: ' + playerPoints +
        ' to Computer: ' + computerPoints;
        victor = "victory";
    }
    return;
}

function playRound(player) {
    if ((playerPoints >= 5) || (computerPoints >= 5)) {
        playerPoints = 0; // reset score if the game previously ended
        computerPoints = 0;
    }
    let computer = getComputerChoice(); // gets computer choice
    if (player === computer) {  // verifies a tie hasn't occurred 
        roundResults.textContent = 'You both played ' + player + '. Go again.'
        return;
    }

    gameRound.innerHTML = `You play ${player}` + '<br>' + `The computer plays ${computer}`; // add another div to display messages to the player about game status
    determineWinner(player, computer);
    gameStatus();
    return;
}

function gameStatus () {
    results.textContent = 'The score is: \n' + `Player: ${playerPoints} to Computer: ${computerPoints}\n`;
    if (playerPoints >= 5){
    gameRound.textContent = 'You win!\n' + 'Play again? Press any button';
    }
    else if (computerPoints >= 5) {
    gameRound.textContent = 'You lost.\n' + 'Play again? Press any button.';
    }
    return;
}

let playerPoints = 0; // trackers for points
let computerPoints = 0;

const rock = document.querySelector('#rock');   // query selectors to read each potential input and output
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const gameRound = document.querySelector('#gameRound');
const gameMessage = document.querySelector('#gameMessage');

gameRound.textContent = "Let's play rock, paper, scissors. Please choose one.";

rock.addEventListener('click', () => {
    playRound("rock");
});

paper.addEventListener('click', () => {
    playRound("paper");
});

scissors.addEventListener('click', () => {
    playRound("scissors");
});
