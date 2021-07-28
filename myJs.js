function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 1){
        return "Rock";
    } else if(randomNumber===2){
        return "Paper";
    } else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let inPlayerSelection = playerSelection.toLowerCase();
    let inComputerSelection = computerSelection.toLowerCase();

    //Player wins by default.
    let playerWinStatus = 1;

    if(inPlayerSelection === inComputerSelection){
       return 2;
    }
    //loose Scenarios
    if(inPlayerSelection==="rock" && inComputerSelection == "paper"){
        playerWinStatus = 0;
    } else if(inPlayerSelection=="paper" && inComputerSelection =="scissors"){
        playerWinStatus =0;
    } else if(inPlayerSelection==="scissors" && inComputerSelection == "rock"){
        playerWinStatus =0;
    }

    if(playerWinStatus ===1){
        return 1;
    } else if(playerWinStatus===0){
       return 0;
    }

}

