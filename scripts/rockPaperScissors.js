function playGame() {
    let menu = document.querySelector('#gameButtons');

    menu.addEventListener('click', (event) => {
        let target = event.target.closest('button');

        switch (target.id) {
            case 'rock':
                console.log("You clicked rock");
                playRound("rock", getComputerChoice());
                break;
            case 'paper':
                console.log("You clicked paper");
                playRound("paper", getComputerChoice());
                break;
            case 'scissors':
                console.log("You clicked scissors");
                playRound("scissors", getComputerChoice());
                break;
        }
    })

    /*console.log("Total scores: You - " + humanScore + "; Computer - " + computerScrore);
    if (humanScore > computerScrore) {
        console.log("You won the game!");
    }
    else if (humanScore === computerScrore) {
        console.log("It's a draw!");
    }
    else {
        console.log("Computer won!");
    }*/
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let humanScore = 0, computerScrore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + ".");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else {
        computerScrore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    // scores and updating them in UI to be done in this function
}

document.getElementById("start").addEventListener('click', function () {
    console.log("Game Starts!");
    playGame();
})