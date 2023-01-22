
const gamebuttons = Array.from(document.getElementsByClassName('columns'));

const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');

const playerXid = document.getElementById('player-X');
const playerOid = document.getElementById('player-O');
const tieCount = document.getElementById('tieCount');
let scoreX = 0, scoreO = 0, numberOfTie = 0;
let Player = 1;
let play1As = {char: 'x', Color: 'crimson'}, play2As = {char: 'o',Color: 'green'};
let isPlayer1Win = false, isPlayer2Win = false;
playerXid.style.border = 'solid blueviolet';

const player1Char = document.createElement('div');
player1Char.className = 'moveIcon1';
player1Char.innerText = play1As.char;
player1Char.style.color = play1As.Color;
playerXid.appendChild(player1Char);

const player2Char = document.createElement('div');
player2Char.className = 'moveIcon2';
player2Char.innerText = play2As.char;
player2Char.style.color = play2As.Color;


function unableButtons() {
    gamebuttons.forEach(square => {
        square.style.pointerEvents = 'none';
    });
}

function clearButton() {
    const button = document.createElement('button');
    button.id = 'clearButton';
    button.innerText = 'Play Again';
    document.body.appendChild(button);
    button.addEventListener('click', clear);
}

function Player1Win(){
    const keyChar = play1As.char;
    if (gamebuttons[0].innerText === keyChar && gamebuttons[1].innerText === keyChar && gamebuttons[2].innerText === keyChar) {
        return true
    }

    if (gamebuttons[3].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[5].innerText === keyChar) {
        return true
    }

    if (gamebuttons[6].innerText === keyChar && gamebuttons[7].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[0].innerText === keyChar && gamebuttons[3].innerText === keyChar && gamebuttons[6].innerText === keyChar) {
        return true
    }
    if (gamebuttons[1].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[7].innerText === keyChar) {
        return true
    }

    if (gamebuttons[2].innerText === keyChar && gamebuttons[5].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[0].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[2].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[6].innerText === keyChar) {
        return true
    }

}

function Player2Win() {
    const keyChar = play2As.char;
    if (gamebuttons[0].innerText === keyChar && gamebuttons[1].innerText === keyChar && gamebuttons[2].innerText === keyChar) {
        return true
    }

    if (gamebuttons[3].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[5].innerText === keyChar) {
        return true
    }

    if (gamebuttons[6].innerText === keyChar && gamebuttons[7].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[0].innerText === keyChar && gamebuttons[3].innerText === keyChar && gamebuttons[6].innerText === keyChar) {
        return true
    }
    if (gamebuttons[1].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[7].innerText === keyChar) {
        return true
    }

    if (gamebuttons[2].innerText === keyChar && gamebuttons[5].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[0].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[8].innerText === keyChar) {
        return true
    }

    if (gamebuttons[2].innerText === keyChar && gamebuttons[4].innerText === keyChar && gamebuttons[6].innerText === keyChar) {
        return true
    }

}

function clear(){
    gamebuttons.forEach(element => {
        element.innerText = '';
        element.style.pointerEvents = 'auto';
    })

    if(isPlayer1Win){
    [playerXid.style.backgroundColor, playerOid.style.backgroundColor] = ['lightseagreen', 'lightcoral'];
    [play1As.char, play2As.char] = ['o', 'x'];
        [play1As.Color, play2As.Color] = ['green', 'crimson'];
    Player = 2;
    }

    else if(isPlayer2Win){
    [playerOid.style.backgroundColor, playerXid.style.backgroundColor] = ['lightseagreen', 'lightcoral'];
    [play1As.char, play2As.char] = ['x', 'o'];
    [play1As.Color, play2As.Color] = ['crimson', 'green'];
    Player = 1;
    }

    isPlayer1Win = false;
    isPlayer2Win = false;
    
    player1Char.innerText = play1As.char;
    player1Char.style.color = play1As.Color;

    player2Char.innerText = play2As.char;
    player2Char.style.color = play2As.Color;

    const buttonId = document.getElementById('clearButton');
    buttonId.remove();
}

function Draw(){
    let count = 0;
    gamebuttons.forEach(element =>{
        if(element.innerText !== ''){
            count++;
        }
    })
    return count;
}

function winner(){
    if(isPlayer1Win){
        unableButtons();
        scoreX++;
        player1Score.innerText = scoreX;
        winnerPopUps('Player 1 Win');
        clearButton();
        return;
    }

    if(isPlayer2Win){
        unableButtons();
        scoreO++;
        player2Score.innerText = scoreO;
        winnerPopUps('Player 2 Win');
        clearButton();
        return;
    }
    if(Draw() === 9){
        unableButtons();
        numberOfTie++;
        tieCount.innerText = numberOfTie;
        winnerPopUps('Draw');
        clearButton();
    }
}

function Play(){
    gamebuttons.forEach(click => {
        click.addEventListener('click', e => {
            if(Player === 1){
                click.innerText = play1As.char;
                click.style.color = play1As.Color;
                playerOid.style.border = 'solid blueviolet';
                playerXid.style.border = 'none';
                playerOid.appendChild(player2Char);
                player1Char.remove();
                click.style.pointerEvents = 'none';
                Player = 2;
                isPlayer1Win = Player1Win();
                winner()
                return
            }

            click.innerText = play2As.char;
            click.style.color = play2As.Color;
            playerXid.style.border = 'solid blueviolet';
            playerOid.style.border = 'none';
            playerXid.appendChild(player1Char);
            player2Char.remove();
            click.style.pointerEvents = 'none';
            Player = 1;
            isPlayer2Win = Player2Win();
            winner()

        });
    });
}

function refresh(){
    location.reload()
}

function winnerPopUps(Text){
    const messageContainer = document.getElementById('game-result-container');
    const message = document.getElementById('game-result');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    messageContainer.style.transform = 'translate(-50%, -50%) scale(1)';
    message.innerText = Text;
    document.body.appendChild(overlay);
    function closeInfo(){
      messageContainer.style.transform = 'scale(0)';
      overlay.remove();
    }
    overlay.addEventListener('click', closeInfo);
    messageContainer.addEventListener('click', closeInfo);
}


const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', refresh)

Play()

