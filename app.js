let quizForm = document.querySelector("form");
let sendButton = document.querySelector(".send-button");
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");

sendButton.addEventListener("click", handleForm);

function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input[type='radio']:checked")
    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt(answers[answer].value, 10);
        
    }
    quizForm.classList.toggle("hidden");
    pointsLabel.innerHTML = points;
    finishedScreen.classList.toggle("hidden");
}

