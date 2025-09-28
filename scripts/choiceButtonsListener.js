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