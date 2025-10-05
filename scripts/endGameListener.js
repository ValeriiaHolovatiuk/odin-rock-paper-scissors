// End Game button is clicked
document.getElementById("endGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divResults, divGameButtons, endResetButtons);
    RemoveCSSClass("inactive", divEndGameResults, startButton, homeButton);

    UpdateElements({ totalRounds: totalRounds, humanScoreEnd: humanScore, computerScoreEnd: computerScore, gameStart: "" });

    if (computerScore > humanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is Computer!" })
    }
    else if (computerScore < humanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is You!" })
    }
    else {
        UpdateElements({ allRoundsWinner: "Unbelivable! It's a draaaaw!" })
    }

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);
})