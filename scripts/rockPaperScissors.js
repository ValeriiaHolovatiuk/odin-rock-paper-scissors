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

function getHumanChoice() {
    let humanChoice = prompt("What's your choice? Enter rock, paper, or scissors: ");

    return humanChoice;
}

function playGame() {
    let humanScore = 0, computerScrore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a draw! Your choice: " + humanChoice + " matches the computers: " + computerChoice + ".");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        }
        else {
            computerScrore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        }
    }

    for(let i = 1; i <= 5; i++){
        console.log("Round " + i + "!");

        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Total scores: You - " + humanScore + "; Computer - " + computerScrore);
    if(humanScore > computerScrore){
        console.log("You won the game!");
    }
    else if(humanScore === computerScrore){
        console.log("It's a draw!");
    }
    else{
        console.log("Computer won!");
    }
}

playGame();