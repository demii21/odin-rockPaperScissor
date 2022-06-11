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
        return ("Its A tie")
    }
    else{
        if(playerSelection==="rock"){
            if(computerSelection==="scissor"){
                PlayerWin++;
                return("You win");
               
            }
            else{
                ComputerWin++;
                return ("You Lose");
                
            }
        }
        if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                PlayerWin++;
                return("You Win");
            }
            else{
                ComputerWin++;
                return("You Lose");
            }
        }
        if(playerSelection==="scissor"){
            if(computerSelection==="paper"){
                PlayerWin++;
                return("You Win");
            }
            else{
                ComputerWin++;
                return("You lose");
            }
        }
    }
}
function scoreUpdate(){
    playerScore.innerText=PlayerWin;
    computerScore.innerText=ComputerWin;
}
function game(){
    let playerSelection;
    let computerSelection;    
        const btns = document.querySelectorAll('#container');
            btns.forEach((button)=>{
                button.addEventListener('click',(e)=>{
                playerSelection = e.target.value;
                computerSelection = computerPlay();
                scoreUpdate();
        
                console.log("playerSelection : " + playerSelection + " computerSelection : " + computerSelection);
                console.log(playRound(playerSelection,computerSelection));
                e.stopPropagation();
                
            });
        });
      
}

game();


