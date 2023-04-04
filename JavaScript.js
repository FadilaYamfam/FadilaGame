//Declaration of our future variables
let UserScore = 0;
let ComputerScore = 0;
const userScore_spam = document.getElementById("UserScore");
const computerScore_spam = document.getElementById("CompScore");
const scoreBoard_div = document.querySelector(".score"); // _div because it is store in a div tag in the html code
const result_p = document.querySelector(".result > p"); //get the paragraph tag inside the result
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor");

function getComputerChoices(){
    const choices = ['rock', 'paper', 'scisssor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "rock") return "Rock 👊";
    if (letter === "paper") return "Paper🖐️";
    return "Scissors✌️";
}

function win(userChoice , computerChoice){
    UserScore++;
    userScore_spam.innerHTML = UserScore;
    computerScore_spam.innerHTML = ComputerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) +  ", you win ! 🥳🥳🥳 "; 
}
function lose(userChoice , computerChoice){
    ComputerScore++;
    userScore_spam.innerHTML = UserScore;
    computerScore_spam.innerHTML = ComputerScore;
    result_p.innerHTML = convertToWord(userChoice ) + " loses to " + convertToWord(computerChoice) +  ", you lost ! 😭😭😭 "; 
}
function draw(userChoice , computerChoice){
    userScore_spam.innerHTML = UserScore;
    computerScore_spam.innerHTML = ComputerScore;
    result_p.innerHTML = convertToWord(userChoice ) + " equals " + convertToWord(computerChoice) +  ", It is a draw ! 😐😐😐 "; 
}

function game(userChoice){
    const computerChoice = getComputerChoices();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice , computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice , computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice , computerChoice);
            break;
    }
}

function main(){
    rock_div .addEventListener('click' , () => game("rock"));

    paper_div .addEventListener('click', () => game("paper"));
    
    scissor_div .addEventListener('click' , () => game("scissor"));
}

main();
