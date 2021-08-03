function displayScore(playerScore, computerScore,roundWinnerMsg){
    let  plScore = document.querySelector('#playerScore');
    let comScore = document.querySelector('#computerScore');
    let roundRes = document.querySelector('.roundResult');

    plScore.textContent = playerScore;
    comScore.textContent = computerScore;
    roundRes.textContent = roundWinnerMsg; 
    roundRes.style.cssText = "text-align:center;font-weight:600;font-size:18px;margin:10px";

}

let userChoice,computerChoice,userScore=0,computerScore=0;

let myButtons = document.querySelectorAll(".button1");
myButtons.forEach(button => button.addEventListener('click',function(e){
    userChoice = this.id;
    if(userChoice != "restartGame"){
        handleClick();
    }
  
    }) )


function handleClick(){

  
    computerChoice = computerPlay();

    let roundResult = playRound(userChoice,computerChoice);
    let roundWinnerMsg;
       //Showing appropriate message about who won the Round.
       if(roundResult === 1){
        userScore++;
        roundWinnerMsg = `User Won this Round! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        displayScore(userScore,computerScore,roundWinnerMsg);
    } else if(roundResult ===0){
        computerScore++;
        roundWinnerMsg = `User Lost this Round! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
        displayScore(userScore,computerScore,roundWinnerMsg);
    } else{
        roundWinnerMsg = `This round ended in Draw! ${userChoice.toUpperCase()} equals ${computerChoice.toUpperCase()}`;
        displayScore(userScore,computerScore,roundWinnerMsg);
    }

    if(isGameFinished()){
        endGame();
        return;
    }
}





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

function isGameFinished(){
   if(computerScore===5){
       return true;
   }
   if(userScore ===5){
       return true;
   }
   else{
       return false;
   }


}

function endGame(){

    const gameResultMsg = document.querySelector('.gameResultMsg');
    
    if(userScore===5){
        gameResultMsg.innerHTML = `<p>Congratulations User, You Have Won This Game.<br> Final Score <br> User: ${userScore} <br> Computer: ${computerScore}`;
    } else{
        gameResultMsg.innerHTML = `<p>Alas User! You have lost this game.<br> Final Score <br> User: ${userScore} <br> Computer: ${computerScore}`;
    }

  

    let plScore = document.querySelector('#playerScore');
    let comScore = document.querySelector('#computerScore');
    let roundRes = document.querySelector('.roundResult');
    plScore.textContent =0;
    comScore.textContent = 0;
    roundRes.textContent = "Round Result";

    const gameCl = document.querySelector('.game');
    gameCl.style.cssText = "display:none";

    const gameRes = document.querySelector('.gameResult');
    gameRes.style.cssText = "display:block";

    

}

const restartButton = document.querySelector('#restartGame');
restartButton.addEventListener('click', function(e){
    showGameScreen();
} )
function showGameScreen(){
        const gameCl = document.querySelector('.game');
        gameCl.style.cssText = "display:block";
    
        const gameRes = document.querySelector('.gameResult');
        gameRes.style.cssText = "display:none";

        computerScore =0;
        userScore =0;
}