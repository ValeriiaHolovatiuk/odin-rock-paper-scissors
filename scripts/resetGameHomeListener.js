const resetGameElements = document.querySelectorAll('.tracked');

resetGameElements.forEach(item => {
    item.addEventListener('click', function () {

        AddCSSClass("inactive", divGameButtons, divResults, pGameStart, divEndGameResults, endResetButtons, homeButton);

        [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);
        UpdateElements({ totalRounds: totalRounds, humanScoreEnd: humanScore, computerScoreEnd: computerScore, gameStart: "", gameResetText: ""});

        RemoveCSSClass("inactive", startButton, divHomeScreenText);

        if (item.id === 'resetGameButton') {
            UpdateElements({ gameResetText: "Previous game was reset. " });
        }
    })
})