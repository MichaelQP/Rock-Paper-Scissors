const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a tie'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you WIN!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result

}


//I still need to add a section that keeps track of score between each player over 5 rounds.
//loop 5 games
if (result = 'you win!' || 'you WIN!') {
    userScore++;
}

if (resulet = 'you lose!') {
    computerScore++;
}