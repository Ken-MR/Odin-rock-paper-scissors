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

function getPlayerSelection() {
    let answer = prompt("Please pick rock, paper, or scissors: ");
    answer = validChoice(answer);
    return answer;
}

function validChoice(choice) {
    while (!(choice === "rock") && !(choice === "paper") && !(choice === "scissors")) {
        choice = prompt("I'm sorry, that is an invalid choice. Please try again: ");
    }
    return choice;
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

function playRound(player, computer) {
    while (player === computer) {
        console.log('You both played ' + player + '. Go again.')
        player = prompt("Choose another option: ")
        validChoice(player);
        computer = getComputerChoice();
        console.log('Okay, rock, paper, scissors, shoot!');
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

    for (let i = 0; i < 5; i++){
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
    }
    if (computerPoints > playerPoints) {
        console.log('You lost, better luck next time.');
    }
    else {
        console.log('You won! Congratulations!');
    }
}

console.log("Let's play rock, paper, scissors.");

game();