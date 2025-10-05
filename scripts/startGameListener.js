// Start Game button is clicked
document.getElementById("startGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divEndGameResults, startButton, divHomeScreenText, homeButton);

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);

    UpdateElements({
        humanChoice: "-", computerChoice: "-", roundResults: "", humanScoreTotal: humanScore, computerScoreTotal: computerScore, gameStart: "Game Starts!"
    });

    RemoveCSSClass("inactive", divResults, divGameButtons, endResetButtons);
})