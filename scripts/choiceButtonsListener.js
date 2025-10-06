menu.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    const buttons = menu.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));

    target.classList.add('active');

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
});
