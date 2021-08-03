function displayScore(computerScore, playerScore,roundWinnerMsg){
    let  plScore = document.querySelector('#playerScore');
    let comScore = document.querySelector('#computerScore');
    let roundRes = document.querySelector('.result');

    plScore.textContent = playerScore;
    comScore.textContent = computerScore;
    roundRes.textContent = roundWinnerMsg; 

 }

let userChoice,computerChoice,userScore=0,computerScore=0;

// let userSelectedButton = document.querySelector("#buttons");
// userSelectedButton.addEventListener("click",handleClick(this.id));

let myButtons = document.querySelectorAll(".button1");
myButtons.forEach(button => button.addEventListener('click',function(e){
    userChoice = this.id;
    handleClick();
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

// function game(){



//      let userChoice, userScore = 0, computerScore = 0, myStr, winner = false;
//      userChoice = getInput();
//      alert(userChoice);

//     //  let computerChoice = computerPlay();
//     //  let roundResult = playRound(userChoice,computerChoice);


    //  //Showing appropriate message about who won the Round.
    //  if(roundResult === 1){
    //     userScore++;
    //     myStr = "Congrats! User You have WON Round " + (i+1)
    // } else if(roundResult ===0){
    //     computerScore++;
    //     myStr = "Alas! User You have LOST Round " + (i+1)
    // } else{
    //     myStr = "Round " + (i+1)+  " Ended in a draw";
    // }

    // console.log(myStr);
    // //Showing appropriate message about who won the game.
    // declareGameWinner(userScore, computerScore);

// }

//  function declareGameWinner(userScore, computerScore){

//     if(userScore>computerScore){
//         console.log("Congratulations USER! You Have Won this Game");
//     } else if(userScore === computerScore){
//         console.log("No one won this Game! IT ended in a draw");
//     } else{
//         console.log("Alas User You have lost this Game");
//     }
//  }

//  function displayScore(computerScore, playerScore){
//     let  plScore = document.querySelector('#playerScore');
//     let comScore = document.querySelector('#computerScore');

//     plScore.textContent = playerScore;
//     comScore.textContent = computerScore;
//  }