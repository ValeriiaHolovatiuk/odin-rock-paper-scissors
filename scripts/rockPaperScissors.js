function playGame() {
    let menu = document.querySelector('#gameButtons');

    menu.addEventListener('click', (event) => {
        let target = event.target.closest('button');

        switch (target.id) {
            case 'rock':
                playRound("rock", getComputerChoice());
                break;
            case 'paper':
                playRound("paper", getComputerChoice());
                break;
            case 'scissors':
                playRound("scissors", getComputerChoice());
                break;
        }
    })
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

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const p = document.getElementById("gameStart");
    p.classList.add("inactive");

    document.getElementById("humanChoice").textContent = humanChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {

        document.getElementById("roundResults").textContent = "It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + ".";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;

        document.getElementById("roundResults").textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else {
        computerScore++;

        document.getElementById("roundResults").textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

document.getElementById("start").addEventListener('click', function () {
    document.getElementById("gameStart").textContent = "Game Starts!";
    playGame();

    const divResults = document.getElementById("results");
    divResults.classList.remove("inactive");

    const divGameButtons = document.getElementById("gameButtons");
    divGameButtons.classList.remove("inactive");

    const startButton = document.getElementById("start");
    startButton.classList.add("inactive");

    /* 
        For the game logic I also need to add the following: End Game button, Reset Game button, and the logic around them

        Logic around End Game button:
         - removes all extra text - the only text left is total score;
         - Start Game button is displayed again;

        Logic around Reset Game button:
         - all text is removed;
         - visually it looks like as if Start Game button was just clicked;
         - scores are set to 0;
    */
})