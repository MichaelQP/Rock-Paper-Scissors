const choices = ['rock', 'paper', 'scissors'];

function game() {
   playRound();
}
function playRound() {
    const playSelection = playerChoice();
    const computerSelection = computerChoice();
}
//ok, maybe this isn't working so well. btw this is testing github commits
function playerChoice() {
    let input = prompt('Type rock, paper, or scissors');
    while(input == null){
        input = prompt('Type rock, paper, or scissors');
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock , Paper, or Scissors. Spelling needs to be exact, but capitilization doesn't matter"
        );
        input = input.toLowerCase()
        check = validateInput(input);
    }
   
    
    
    }
    //console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

game();
