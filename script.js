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
            resultText.classList.add("show");

             // Disable button clicks
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;

            
        }
    }




