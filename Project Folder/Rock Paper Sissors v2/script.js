/*
TODO:
    - Create container that includes the title of the webpage
    - create a UI that contains 3 buttons 
    - Display Running Score until one play reaches 5 wins
*/

//Constants and Globals
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    let rand = Math.floor(Math.random() * 3 + 1); // gives a random number in between 1 and 3
    let compSelection = "";
    let result = "";

    if (rand === 1){
        compSelection = "rock";
    }
    else if(rand === 2){
        compSelection = "paper"
    }
    else if(rand === 3){
        compSelection = "scissor";
    }

    result = win(playerChoice, compSelection);
    // Troubleshooting
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${compSelection}`);
    // Call this functioon 
    scoreBoard(playerScore, computerScore);
    alert(result);
};

function win(player, computer){
    if(player === computer){
        return "tie";
    }

    if ((player === "rock" && computer === "scissor") || 
        (player === "scissor" && computer === "paper") || 
        (player === "paper" && computer === "rock")){
        playerScore += 1;
        return "win";
    }
    // if(playerScore >= 1 || computerScore >= 1){
    //     restartButton();
    // }
    else{
        computerScore += 1;
        return "lose";
    };

    
};

// keeps score
function scoreBoard(playerScore, computerScore){
    score = document.querySelector('#score-container');
    player = score.querySelector('.Player');
    computer = score.querySelector('.Computer');

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
};

// function restartButton(){
//     const resetGame = document.querySelector('#restart');
//     const reset = document.createElement('button');
//     reset.textContent = "Restart";
//     resetGame.appendChild(reset);
//     console.log("HIT");
// }

document.addEventListener("DOMContentLoaded", () => {
    // Creates title name
    const title = document.querySelector('.title');
    const titleElement = document.createElement('h1'); // Fixed: document.createElement
    titleElement.textContent = "Rock Paper Scissors";  // Fixed spelling
    title.appendChild(titleElement); // Fixed: removed quotes

    //selecting containers
    const rock = document.querySelector('.rock-container');
    const paper = document.querySelector('.paper-container');
    const sissors = document.querySelector('.scissor-container');

    // Create Buttons for each container
    const rockButton = document.createElement('button');
    rockButton.textContent = "rock";
    rock.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.textContent = "paper";
    paper.appendChild(paperButton);

    const sissorsButton = document.createElement('button');
    sissorsButton.textContent = "scissor";
    sissors.appendChild(sissorsButton);
    
    // Include event path to function when clicked
    // TODO: Fix this so that I am adding event listeners to the
    // buttons instead of the buttons (fixed)
    rockButton.addEventListener('click', () => play('rock'));
    paperButton.addEventListener('click', () => play('paper'));
    sissorsButton.addEventListener('click', () => play('scissor'))

    // Displays the initial scoreboard
    scoreBoard(playerScore, computerScore);
});
