resetGameElements.forEach(item => {
    item.addEventListener('click', function () {

        AddCSSClass("inactive", divGameButtons, divResults, divEndGameResults, endResetButtons, homeButton, pGameStartText, pRoundResults);

        [humanScore, computerScore, totalRounds] = ResetValues(humanScore, computerScore, totalRounds);
        UpdateElements({ totalRounds: totalRounds, humanScoreEnd: humanScore, computerScoreEnd: computerScore, gameStart: "", gameResetText: "", roundNumber: totalRounds});

        RemoveCSSClass("inactive", startButton, divHomeScreenText);

        if (item.id === 'resetGameButton') {
            UpdateElements({ gameResetText: "Previous game was reset. " });
        }

        choiceButtons.forEach(button => {
            if(button.classList.contains('active')){
                RemoveCSSClass("active", button);
            }
        });
    })
})