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
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
            return "Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return "Tie! Both " + playerSelection
        }
        else if (computerSelection == "paper") {
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
            return "Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "Tie! Both " + playerSelection
        }
        else if (computerSelection == "rock") {
            return "Win! " + playerSelection + " beats " + computerSelection
        } else {
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
}

game()

