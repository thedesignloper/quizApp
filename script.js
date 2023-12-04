const questions = [
    {
        question : "which is large animal in the world!",
        answers : [
            {text: "shark" , correct: false},
            {text: "Blue whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false}
        ] ,
    },
    {
        question : "Fathometer is used to measure",
        answers : [
            {text: "Earthquakes" , correct: false},
            {text: " Rainfall" , correct: false},
            {text: "Ocean depth" , correct: true},
            {text: "Sound intensity" , correct: false}
        ] ,
    },
    {
        question : "6 months day and 6 months night - Country Name",
        answers : [
            {text: "Nepal" , correct: false},
            {text: "Norway" , correct: true},
            {text: "Tibet" , correct: false},
            {text: " Iceland" , correct: false}
        ] ,
    },
    {
        question : "Which is a green planet in the solar system!",
        answers : [
            {text: " Pluto" , correct: false},
            {text: "Venus" , correct: false},
            {text: "Uranus" , correct: true},
            {text: "Mars" , correct: false}
        ] ,
    },
    {
        question : "An astronaut in outer space will observe sky as!",
        answers : [
            {text: "White" , correct: false},
            {text: "Black" , correct: true},
            {text: "Blue" , correct: false},
            {text: "Red" , correct: false}
        ] ,
    },
    
    {
        question : "which is smallest country in the world!",
        answers : [
            {text: "Vatican City" , correct: true},
            {text: "Bhutan" , correct: false},
            {text: "Nepal" , correct: false},
            {text: "Shri Lanka" , correct: false}
        ] ,
    },
    
    {
        question : "which is largest desert in the world!",
        answers : [
            {text: "Kalahari" , correct: false},
            {text: "gobi" , correct: false},
            {text: "sahara" , correct: false},
            {text: "Antarctica" , correct: true}
        ] ,
    },
    
    {
        question : "which is smallest continent in the world!",
        answers : [
            {text: "Asia" , correct: false},
            {text: "Australia" , correct: true},
            {text: "Arctic" , correct: false},
            {text: "Africa" , correct: false}
        ] ,
    }  
];


const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);    
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)    
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function handleNextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block'
} 

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextbtn();
    }
    else
    {
        startQuiz();
    }
})

startQuiz();
