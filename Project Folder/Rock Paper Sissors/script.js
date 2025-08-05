// const mainCont = document.querySelector("#game-container"); 
let playerChoice = "";

console.log("hello world");

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
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`Computer Choice: ${compSelection}`);
    alert(result);

};

function win(player, computer){
    if(player === computer){
        return "tie";
    }

    if ((player === "rock" && computer === "scissor") || 
        (player === "scissor" && computer === "paper") || 
        (player === "paper" && computer === "rock")){
        
        return "win";
    }
    else{
        return "lose";
    }
};