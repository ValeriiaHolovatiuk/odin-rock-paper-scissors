// End Game button is clicked
document.getElementById("endGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divResults, divGameButtons, endResetButtons, pGameStartText);
    RemoveCSSClass("inactive", divEndGameResults, startButton, homeButton);

    UpdateElements({ totalRounds: totalRounds, humanScoreEnd: humanScore, computerScoreEnd: computerScore, gameStart: "" });

    if (computerScore > humanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is Computer!" });
        UpdateElementsColor({ allRoundsWinner: "#A84B50" });
    }
    else if (computerScore < humanScore) {
        UpdateElements({ allRoundsWinner: "All rounds winner is You!" });
        UpdateElementsColor({ allRoundsWinner: "#338066" });
    }
    else {
        UpdateElements({ allRoundsWinner: "Unbelivable! It's a draaaaw!" });
        UpdateElementsColor({ allRoundsWinner: "#B99B4A" });
    }

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);

    choiceButtons.forEach(button => {
        if (button.classList.contains('active')) {
            RemoveCSSClass("active", button);
        }
    });
})