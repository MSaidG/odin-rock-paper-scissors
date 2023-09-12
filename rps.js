
const buttons = document.querySelectorAll("button");

const result_div = document.querySelector(".result");
const result_p = document.createElement("p");
const score_p = document.createElement("p");
const round_p = document.createElement("p");

result_p.textContent = "You made it!";
score_p.textContent = "You: 0 CPU: 0";
round_p.textContent = "Round: 1";


result_div.appendChild(result_p);
result_div.appendChild(score_p);
result_div.appendChild(round_p);




buttons.forEach(function(button) {

    
    button.addEventListener("click", function(e) {

        playOneRound(this.id, getComputerChoice());
    });

    
});



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


function playOneRound (playerChoice, computerChoice)
{
    let result = "";
    let score = +score_p.textContent.slice(5,6);
    // let score = score_p.textContent.slice(6, 7);
    let c_score = +score_p.textContent.slice(12);
    let round = +round_p.textContent.slice(7);

    console.log(score);
    console.log(c_score);
    console.log(round);

    // while (playerChoice !== rock 
    //     && playerChoice !== paper 
    //     && playerChoice !== scissors)
    // {
    //     playerChoice = prompt("Please enter rock, paper or scissors!").toLowerCase();
    // }


    if (playerChoice === "scissors" && computerChoice === "paper"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "rock" && computerChoice === "scissors")
    {
        result = `You Win! ${playerChoice.charAt(0).toUpperCase() + 
            playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + 
                computerChoice.slice(1)}`;

        result_p.textContent = result;
    }
    else if (playerChoice === computerChoice)
    {
        result = `Tie! ${playerChoice.charAt(0).toUpperCase() + 
            playerChoice.slice(1)} ties with ${computerChoice.charAt(0).toUpperCase() + 
                computerChoice.slice(1)}`;
        
        result_p.textContent = result;
    }
    else{
        result = `You Lose! ${playerChoice.charAt(0).toUpperCase() + 
            playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + 
                computerChoice.slice(1)}`;

        result_p.textContent = result;
    }


    if (result.includes("Win"))
    {
        score++;
    }
    else if (result.includes("Lose"))
    {
        c_score++;
    }
    round++;

    score_p.textContent = `You: ${score} CPU: ${c_score}`;
    round_p.textContent = `Round: ${round}`;

    if (round > 5)
    {
        if (score > c_score) 
        {
            result_p.textContent = "YOU WIN!";
        }
        else if (score == c_score)
        {
            result_p.textContent = "TIE!";
        }
        else
        {
            result_p.textContent = "YOU LOSE!";
        }

        score_p.textContent = `You: 0 CPU: 0`;
        round_p.textContent = "Round: 1";
    }

    return result;
}

function game(playerChoice, computerChoice)
{

    let score = 0;
    let c_score = 0
    for (let i = 0; i < 5; i++)
    {
        let result = playOneRound(playerChoice, computerChoice);
        if (result.includes("Win"))
        {
            score++;
        }
        else if (result.includes("Lose"))
        {
            c_score++;
        }
        score_p.textContent = `You: ${score} CPU: ${c_score}`;
        result = "";
    }

    if (score > c_score)
    {
        result_p.textContent = "YOU WIN!";
        return "YOU WIN!";
    }
    else if (score == c_score)
    {
        result_p.textContent = "TIE!";
        return "TIE";
    }

    result_p.textContent = "YOU LOSE!";
    return "YOU LOSE!";
}