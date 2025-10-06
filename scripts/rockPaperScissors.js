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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    AddCSSClass("inactive", pGameStartText);
    RemoveCSSClass("inactive", pRoundResults)

    UpdateElements({humanChoice: humanChoice, computerChoice: computerChoice});

    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {

        totalRounds++;

        UpdateElements({roundResultsText: "It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + "."});
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        totalRounds++;

        UpdateElements({roundResultsText: "You win! " + humanChoice + " beats " + computerChoice + "."});
    }
    else {
        computerScore++;
        totalRounds++;

        UpdateElements({roundResultsText: "You lose! " + computerChoice + " beats " + humanChoice + "."});
    }

    UpdateElements({humanScoreTotal: humanScore, computerScoreTotal: computerScore});
}