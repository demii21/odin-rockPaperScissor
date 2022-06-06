let choice = ["rock","paper","scissor"];
let PlayerWin =0,ComputerWin=0;

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

function game(){
    let playerSelection;
    let computerSelection;
    for(let i=0;i<5;i++){
        playerSelection= prompt("Enter pepega").toLowerCase();
        computerSelection = computerPlay();
        console.log("playerSelection : " + playerSelection + " computerSelection : " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if(PlayerWin===3 || ComputerWin===3)
            break; 
    }
}

console.log(game());