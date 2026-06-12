// Check if the file is linked correctly
console.log("Hello, World!")

// Get the computer choice. Write a function that randomly return one of the three options (rock, paper, scissors)
function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3)
    return options[choiceIndex]
}

// Prompt the user to get the human choice
function getHumanChoice() {
    let userChoice = prompt("Choose one: rock, paper, scissors...")
    return userChoice.toLowerCase()
}

// Play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a draw! You both have chosen ${humanChoice}`)
    }else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock")
        computerScore++
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors")
        humanScore++
    }else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock")
        humanScore++
    }else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper")
        computerScore++
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper")
        humanScore++
    }else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors")
        computerScore++
    }
}

// Variables
const options = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

// Test in Browser Console
playGame()
console.log(`Human score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)
