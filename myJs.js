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

function game(){

    let userScore = 0, computerScore = 0, myStr;

    for(let i=0;i<5;i++){
     let choice = "Enter Your choice (Rock,Paper, Scissors) for round "+ (i+1);  
     let userChoice = prompt(choice);
     let computerChoice = computerPlay();
     let roundResult = playRound(userChoice,computerChoice);
   
 
     //Showing appropriate message about who won the Round.
     if(roundResult === 1){
        userScore++;
        myStr = "Congrats! User You have WON Round " + (i+1)
    } else if(roundResult ===0){
        computerScore++;
        myStr = "Alas! User You have LOST Round " + (i+1)
    } else{
        myStr = "Round " + (i+1)+  " Ended in a draw";
    }

    console.log(myStr);
   }

    //Showing appropriate message about who won the game.
    declareGameWinner(userScore, computerScore)

   
 }

 function declareGameWinner(userScore, computerScore){

    if(userScore>computerScore){
        console.log("Congratulations USER! You Have Won this Game");
    } else if(userScore === computerScore){
        console.log("No one won this Game! IT ended in a draw");
    } else{
        console.log("Alas User You have lost this Game");
    }
 }