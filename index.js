// Check if the file is linked correctly
console.log("Hello, World!")

// Get the computer choice. Write a function that randomly return one of the three options (rock, paper, scissors)
function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3)
    return options[choiceIndex]
}

const options = ["rock", "paper", "scissors"]



// Prompt the user to get the human choice
function getHumanChoice() {
    let userChoice = prompt("Choose one: rock, paper, scissors...")
    return userChoice
}

// Test in Browser Console
console.log(`Computer has chosen ${getComputerChoice()}`)
console.log(`User has chosen ${getHumanChoice()}`)

