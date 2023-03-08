var num = 0;

function getComputerChoice() {
    choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie! Both " + playerSelection
        }
        else if (computerSelection == "scissors") {
            num++;
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
            num--;
            return "Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return "Tie! Both " + playerSelection
        }
        else if (computerSelection == "paper") {
            num++;
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
            num--;
            return "Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "Tie! Both " + playerSelection
        }
        else if (computerSelection == "rock") {
            num++;
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
            num--;
            return "Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    const result = num > 0 ? "you" : num < 0 ? "the computer" : "neither, a tie";
    console.log(`The winner is ${result}!`);
}

game()

