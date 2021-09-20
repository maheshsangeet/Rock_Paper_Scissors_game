
// *****   start game ***** //
function startGame() {
    const playBtn = document.querySelector('.introduction button');
    const introScreen = document.querySelector('.introduction');
    const gameScreen = document.querySelector('.game');

    playBtn.addEventListener('click',()=> {
        introScreen.classList.add('fadeOut');
        gameScreen.classList.remove('fadeOut');

        playerNameFunc();
    })

}

// ***** player name update ****** //
const playerNameUpdate = document.querySelector('.playerScore h2');
const playerInputName = document.querySelector('.playerName');
let playerName = playerNameUpdate.textContent;

function playerNameFunc() {
    playerName = `${playerInputName.value}`;

    if (playerName === '') {
        playerName = 'Player';
    }else {
        playerName = playerNameUpdate.textContent = `${playerInputName.value}`;
    }
}


// ***** play game  ****** //
function playGame() {
    const options = document.querySelectorAll('.options button');
    const computerHand = document.querySelector('.computerHand');
    const playerHand = document.querySelector('.playerHand');
    const hands = document.querySelectorAll('.hands img');
    
    // **** computer options ***** //
    const computerOptions = ['rock','paper','scissors'];


    options.forEach(option => {
        option.addEventListener('click', function(e) {

            // computer choice
            const computerNumber = Math.floor(Math.random()*10)%3;
            const computerChoice = computerOptions[computerNumber];


            // animations
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";


            setTimeout(() => {
                // taking values for compareHands function
                compareHands(e.target.textContent, computerChoice);

                // update images
                computerHand.src = `./assets/${computerChoice}.png`;
                playerHand.src = `./assets/${e.target.textContent}.png`;
            }, 2000)
 
        })
    })


    // animation removed
    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = "";
            // hand.style.animation = "";
        });
    });



    // ***** update score ****** //
    let pScore = 0;
    let cScore = 0;

    function updateScore() {
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


    // compare hands
    const winner = document.querySelector('.winner');
    function compareHands(playerChoice, computerChoice) {

        // check for a tie
        if (playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        // check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = `${playerName} wins`;
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = `${playerName} wins`;
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = `${playerName} wins`;
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        
    }
    
}


startGame();
playGame();
