   const totalScore = {playerScore : 0, computerScore :0}
   const resultDiv = document.getElementById('Winner')
   const Choice = document.getElementById('Choice')
   const yourScore = document.getElementById('Score')
   const rpsChoice = ['Rock' , 'Paper' , 'Scissor']
   const reset = document.getElementById('reset')
   


// Computer Choice
function getComputerChoice()
{   
    const randomNumber = Math.floor(Math.random()*3)
    return rpsChoice[randomNumber]
}


function showResult(score,playerChoice,computerChoice)
{
    if(score == 1)
    {
        resultDiv.innerText = "You Won"
    }
    else if(score ==0)
    {
        resultDiv.innerText = "It's a Tie"
    }
    else
    {
        resultDiv.innerText = "Computer Won"
    }

    Choice.innerText = " Computer chose " + computerChoice + " and " + "You chose " + playerChoice

    yourScore.innerText = `Player Score : ${totalScore['playerScore']}`
}
function newGame()
{
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    yourScore.innerText = ''
    resultDiv.innerText =''
    Choice.innerText =''
    
}
// Human Wins
function getResult(playerChoice , computerChoice)
{
    let score 
    if(playerChoice == computerChoice)
    {
        score = 0;
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Scissor')
    {
        score = 1;
    }
    else if(playerChoice == 'Scissor' && computerChoice == 'Paper')
    {
        score = 1;
    }
    else if(playerChoice == 'Paper' && computerChoice == 'Rock')
    {
        score = 1;
    }

    else{
        score = -1;
    }
    return score
}

function onClickRPS(playerChoice)
{
    console.log(playerChoice)
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    const score = getResult(playerChoice ,computerChoice)
    totalScore['playerScore'] += score;
    console.log(score)
    console.log(totalScore)
    showResult(score,playerChoice,computerChoice)
}
function playGame()
{
    const RPSbuttons = document.querySelectorAll('.btn')
    RPSbuttons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value);
    })
}




reset.onclick = () => newGame()




function newgame ()
{        score = 0;
        totalScore[playerScore] = 0;
        console.log(totalScore[playerScore])
}





playGame()
