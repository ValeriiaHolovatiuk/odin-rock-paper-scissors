function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        UpdateElementsColor({ computerChoice: "#A28C65" })
        return "rock";
    }
    else if (choice === 1) {
        UpdateElementsColor({ computerChoice: "#F0E8D2" })
        return "paper";
    }
    else {
        UpdateElementsColor({ computerChoice: "#6FB6C9" })
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            UpdateElementsColor({ humanChoice: "#A28C65" })
            break;
        case "paper":
            UpdateElementsColor({ humanChoice: "#F0E8D2" })
            break;
        case "scissors":
            UpdateElementsColor({ humanChoice: "#6FB6C9" })
            break;
    }

    AddCSSClass("inactive", pGameStartText);
    RemoveCSSClass("inactive", pRoundResults);

    UpdateElements({ humanChoice: humanChoice, computerChoice: computerChoice });

    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {

        totalRounds++;

        UpdateElements({ roundResultsText: "It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + "." });
        UpdateElementsColor({ roundResultsText: "#B99B4A" })
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        totalRounds++;

        UpdateElements({ roundResultsText: "You win! " + humanChoice + " beats " + computerChoice + "." });
        UpdateElementsColor({ roundResultsText: "#338066" })
    }
    else {
        computerScore++;
        totalRounds++;

        UpdateElements({ roundResultsText: "You lose! " + computerChoice + " beats " + humanChoice + "." });
        UpdateElementsColor({ roundResultsText: "#A84B50" })
    }

    UpdateElements({ humanScoreTotal: humanScore, computerScoreTotal: computerScore });
}