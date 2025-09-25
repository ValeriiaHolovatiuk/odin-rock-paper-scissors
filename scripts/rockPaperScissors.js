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

function ResetValues(...values) {
    return values.map(() => 0);
}

let humanScore = 0, computerScore = 0, totalRounds = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const p = document.getElementById("gameStart");
    p.classList.add("inactive");

    document.getElementById("humanChoice").textContent = humanChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {

        totalRounds++;

        document.getElementById("roundResults").textContent = "It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + ".";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        totalRounds++;

        document.getElementById("roundResults").textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else {
        computerScore++;
        totalRounds++;

        document.getElementById("roundResults").textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

const divResults = document.getElementById("results");
const divGameButtons = document.getElementById("gameButtons");
const startButton = document.getElementById("startGameButton");
const endResetButtons = document.getElementById("gameStateButtons");
const divEndGameResults = document.getElementById("endGameResults");
const resetGameButton = document.getElementById("resetGameButton");
const endGameButton = document.getElementById("endGameButton");

function AddCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.add(className);
    });
}

function RemoveCSSClass(className, ...values) {
    values.forEach(element => {
        element.classList.remove(className);
    });
}

function UpdateElements(values) {
    for (const [id, value] of Object.entries(values)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
}

// Start Game button is clicked

document.getElementById("startGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divEndGameResults, startButton);

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);

    UpdateElements({
        humanChoice: "-", computerChoice: "-", roundResults: "", humanScore: humanScore, computerScore: computerScore, gameStart: "Game Starts!"
    });

    playGame();

    RemoveCSSClass("inactive", divResults, divGameButtons, endResetButtons);

    /* 
        For the game logic I also need to add the following: End Game button, Reset Game button, and the logic around them

        End Game button logic is done

        Logic around Reset Game button:
         - all text is removed;
         - visually it looks like as if Start Game button was just clicked;
         - scores are set to 0;

        UPD: I also would like to add posibility to revert to initial screen look (only text + start game button) if the Welcome text is clicked
    */
})

// End Game button is clicked

document.getElementById("endGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divResults, divGameButtons, endResetButtons);
    RemoveCSSClass("inactive", divEndGameResults, startButton);

    let tempHumanScore = humanScore, tempCompScore = computerScore, tempTotalRounds = totalRounds;

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);

    UpdateElements({ totalRounds: tempTotalRounds, humanScoreEnd: tempHumanScore, computerScoreEnd: tempCompScore, gameStart: "" });

    if (tempCompScore > tempHumanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is Computer!" })
    }
    else if (tempCompScore < tempHumanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is You!" })
    }
    else {
        UpdateElements({ allRoundsWinner: "Unbelivable! It's a draaaaw!" })
    }

    [tempHumanScore, tempCompScore, tempTotalRounds] = ResetValues(tempHumanScore, tempCompScore, tempTotalRounds);
})