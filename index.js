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
        messageText.textContent = `It's a draw! You both have chosen ${humanChoice}`
    }else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock")
        messageText.textContent = "You lose! Paper beats rock"
        computerScore++
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors")
        messageText.textContent = "You win! Rock beats scissors"
        humanScore++
    }else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock")
        messageText.textContent = "You win! Paper beats rock"
        humanScore++
    }else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper")
        messageText.textContent = "You lose! Scissors beats paper"
        computerScore++
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper")
        messageText.textContent = "You win! Scissors beats paper"
        humanScore++
    }else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors")
        messageText.textContent = "You lose! Rock beats scissors"
        computerScore++
    }
}

// Check winner and reset score when the human or computer score is equal to 5
function checkWinner(human, computer) {
    if (human == 5 && computer < 5) {
        scoreElement.textContent = "You win!!"
        resetScore()
    } else if (computer == 5 && human < 5) {
        scoreElement.textContent = "Sorry, you lose! The computer score 5 points."
        resetScore()
    } else {
        scoreElement.textContent = `Score: ${humanScore} vs ${computerScore}`
    }
}

function resetScore() {
    humanScore = 0
    computerScore = 0
}

// Variables
const options = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

// Test in Browser Console
console.log(`Human score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)

// DOM Manipulation
const btn = document.querySelectorAll(".btn")
const messageContainer = document.querySelector(".result")
const messageText = document.createElement("p")
const scoreElement = document.createElement("p")

messageContainer.appendChild(messageText)
messageContainer.appendChild(scoreElement)

for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        // console.log(e.target.textContent.toLowerCase())
        let humanChoice = e.target.textContent.toLowerCase()
        playRound(humanChoice, getComputerChoice()) 
        checkWinner(humanScore, computerScore)
})
}

document.querySelector('body').style.textAlign = "center"
document.querySelector('body').style.marginTop = "50px" 