

function getComputerChoice()
{
    let result = Math.floor(Math.random() * 3) + 1 ;
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    switch(result)
    {
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
    }

    return  result;
}


function playOneRound (computerChoice, playerChoice)
{
    computerChoice = getComputerChoice();

    playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    while (playerChoice !== rock 
        && playerChoice !== paper 
        && playerChoice !== scissors)
    {
        playerChoice = prompt("Please enter rock, paper or scissors!").toLowerCase();
    }


    if (playerChoice === "scissors" && computerChoice === "paper"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "rock" && computerChoice === "scissors")
    {
        return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    }
    else if (playerChoice === computerChoice)
    {
        return `Tie! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ties with ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    }
    else{
        return `You Lose! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    }
}

function game ()
{

    let score = 0;
    let c_score = 0
    for (let i = 0; i < 5; i++)
    {
        let result = playOneRound();
        console.log(result);
        if (result.includes("Win"))
        {
            score++;
        }
        else if (result.includes("Lose"))
        {
            c_score++;
        }
    }

    if (score > c_score)
    {
        return "YOU WIN!";
    }
    else if (score == c_score)
    {
        return "TIE";
    }

    return "YOU LOSE!";
}