let menu = document.querySelector('#gameButtons');
const divResults = document.getElementById("results");
const divGameButtons = document.getElementById("gameButtons");
const startButton = document.getElementById("startGameButton");
const endResetButtons = document.getElementById("gameStateButtons");
const divEndGameResults = document.getElementById("endGameResults");
const resetGameButton = document.getElementById("resetGameButton");
const endGameButton = document.getElementById("endGameButton");
const pGameStart = document.getElementById("gameStart");
const pGameReset = document.getElementById("gameResetText");
const divHomeScreenText = document.getElementById("homeScreenText");
const homeButton = document.getElementById("homeButton");
const pGameStartText = document.getElementById("gameStartText");
const pRoundResults = document.getElementById("roundResults");

let humanScore = 0, computerScore = 0, totalRounds = 0;