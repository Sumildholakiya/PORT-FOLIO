let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin , userChoice , CompChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =` You Win! your ${userChoice} beats ${CompChoice} `;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =` You lose! ${CompChoice} beats your ${userChoice} `;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) => {
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        }
        else{
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});