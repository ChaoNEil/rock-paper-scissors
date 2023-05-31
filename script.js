    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");
    const resultText = document.getElementById("result");
    const roundText = document.getElementById("round");
    const userScoreText = document.getElementById("user-score");
    const computerScoreText = document.getElementById("computer-score");

   
    //event listeners for button clicks clacks;
    rockBtn.addEventListener("click", function(){
        playRound("rock");
    });

    paperBtn.addEventListener("click", function(){
        playRound("paper");
    });

    scissorsBtn.addEventListener("click", function(){
        playRound("scissors");
    });


     // Initialize round counter and scores
     let round = 0;
     let userScore = 0;
     let computerScore = 0;
 
    
    //game logic
    function playRound(userChoice){
        //generate computer's choice : rock paper or scissors
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        //determine the winner
        let result;
        if (userChoice == computerChoice) {
            result = "It's a TIE!";
        } else if (
            (userChoice == "rock" && computerChoice == "scissors") ||
            (userChoice == "paper" && computerChoice == "rock") ||
            (userChoice == "scissors" && computerChoice == "paper")
        ) {
            result = " K.O. You win!";
            userScore++;
        } else {
            result = "Computer wins! Better luck next time."
            computerScore++;
        }

        //display the result
        resultText.textContent = "You choose " + userChoice + " computer chose " + computerChoice + " . " + result;


       //update scores
       userScoreText.textContent = "Your Score: " + userScore;
       computerScoreText.textContent = "Computer's Score: " + computerScore;


        //check for the end of the game
        if (userScore === 5 || computerScore === 5) {
            //determine the final winner
            let finalResult;
            if(userScore > computerScore) {
                finalResult = "You win the game, good job!";
            }else if (userScore < computerScore) {
                finalResult = "Computer wins the game!";
            } else{
                finalResult = "It's a TIE!!!";
            }
        

            //Display the final result 
            resultText.textContent = "GAME OVER! " + finalResult;

             // Disable button clicks
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;

            alert("Refresh the browser to play again")
        }
    }



//     for (var round = 1; round <=5; round++){
//         console.log("Round " + round)
//         let userChoice = prompt("Don't forget to go to Inspect source and then open console to see your results. Enter your choice weapon (rock, paper, scissors): " )

//         if (!userChoice) {
//             // if the user cancels or leaves the prompt blank
//             return console.log("Game abandoned.")
            
//         }

//         userChoice = userChoice.toLowerCase()

//         if (!choices.includes(userChoice)) {
//             // If the user enters an invalid choice
//             return console.log("Choose from these ONLY (rock,paper,scissors). Now again refresh the browser!")
//         }


//         console.log("Your choice: " , userChoice)
//         console.log("Computer's choice: " , computerChoice)

//         if (userChoice === computerChoice) {
//             console.log("It's a TIE!")
//         }else if (
//             (userChoice === "rock" && computerChoice === "scissors") ||
//             (userChoice === "paper" && computerChoice == "rock") ||
//             (userChoice === "scissors" && computerChoice === "paper")
//         ) {
//             console.log("You win this round!")
//             playerScore++
//         }else{
//             console.log("You lose this round!")
//             computerScore++
//         }

//     }

//     console.log("Final Scores: ")
//     console.log("Player: " + playerScore)
//     console.log("Computer: " + computerScore)

//     if (playerScore > computerScore) {
//         console.log("Congratulations! You win the game!")
//     } else if (playerScore < computerScore) {
//         console.log("You lose! Sorry , better luck next time!")
//     }
//     else{
//         console.log("It's a tie! The game ends in a draw.")
//     }
 

