let choice = ["rock","paper","scissor"];
let PlayerWin =0,ComputerWin=0;
let playerScore = document.getElementById("Pscore");
let computerScore = document.getElementById("Cscore");
function computerPlay(){
    const randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return randomChoice;
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return ("\nIts A tie")
    }
    
    if(playerScore==5||computerScore==5){
        alert("Please start a new Game");
        
    }
     
    else{
        if(playerSelection==="rock"){
            if(computerSelection==="scissor"){
                PlayerWin++;
                return("\nYou win");
               
            }
            else{
                ComputerWin++;
                return ("\nYou Lose");
                
            }
        }
        if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                PlayerWin++;
                return("\nYou Win");
            }
            else{
                ComputerWin++;
                return("\nYou Lose");
            }
        }
        if(playerSelection==="scissor"){
            if(computerSelection==="paper"){
                PlayerWin++;
                return("\nYou Win");
            }
            else{
                ComputerWin++;
                return("\nYou lose");
            }
        }
    }
}
function scoreUpdate(){
    playerScore.innerText=PlayerWin;
    computerScore.innerText=ComputerWin;
}
let result = document.querySelector('#result');
function game(){
    let playerSelection;
    let computerSelection;    
        const btns = document.querySelectorAll('#container');
            btns.forEach((button)=>{
                button.addEventListener('click',(e)=>{
                playerSelection = e.target.value;
                computerSelection = computerPlay();
                console.log("playerSelection : " + playerSelection + " computerSelection : " + computerSelection);
                console.log(result.innerText = "playerSelection : " + playerSelection + " \ncomputerSelection : " + computerSelection + playRound(playerSelection,computerSelection));
                scoreUpdate();
                e.stopPropagation();
            });
        });
}
const startBtn = document.querySelector("#newGame");
startBtn.onclick = () =>{
    PlayerWin = 0;
    ComputerWin = 0;
    playerScore.innerText=0;
    computerScore.innerText=0;
    result.innerText="";
}
game();