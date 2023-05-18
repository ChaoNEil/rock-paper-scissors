function playGame() {
    let choices = ["rock", "paper", "scissors"]
    let playerScore = 0
    let computerScore = 0
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]

    for (var round = 1; round <=5; round++){
        console.log("Round " + round)
        let userChoice = prompt("Don't forget to go to Inspect source and then open console to see your results. Enter your choice weapon (rock, paper, scissors): " )

        if (!userChoice) {
            // if the user cancels or leaves the prompt blank
            return console.log("Game abandoned.")
            
        }

        userChoice = userChoice.toLowerCase()

        if (!choices.includes(userChoice)) {
            // If the user enters an invalid choice
            return console.log("Choose from these ONLY (rock,paper,scissors). Now again refresh the browser!")
        }


        console.log("Your choice: " , userChoice)
        console.log("Computer's choice: " , computerChoice)

        if (userChoice === computerChoice) {
            console.log("It's a TIE!")
        }else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice == "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!")
            playerScore++
        }else{
            console.log("You lose this round!")
            computerScore++
        }

    }

    console.log("Final Scores: ")
    console.log("Player: " + playerScore)
    console.log("Computer: " + computerScore)

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!")
    } else if (playerScore < computerScore) {
        console.log("You lose! Sorry , better luck next time!")
    }
    else{
        console.log("It's a tie! The game ends in a draw.")
    }
}

playGame()