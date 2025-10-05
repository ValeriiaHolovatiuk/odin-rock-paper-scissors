document.getElementById("resetGameButton").addEventListener('click', function () {
    AddCSSClass("inactive", divGameButtons, divResults, pGameStart, divEndGameResults, endResetButtons);

    [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);
    UpdateElements({ totalRounds: totalRounds, humanScoreEnd: humanScore, computerScoreEnd: computerScore, gameStart: "" });

    RemoveCSSClass("inactive", startButton, divHomeScreenText);

    UpdateElements({gameResetText: "Previous game was reset. "});
})