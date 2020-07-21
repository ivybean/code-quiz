var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var question = document.getElementById("question")
var answerButton = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)

function startGame(){
  console.log("It has begun!");
  startButton.classList.add('hide')
  questionContainer.classList.remove("hide")
  question.classList.remove("hide")
  answerButton.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion(){
  var startQuestion = 0
  askQuestion(questionArray[startQuestion])
}

function askQuestion(questionText){
  question.innerText = questionText.questionText
  questionText.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', answerQuestion) 
      answerButton.appendChild(button)
  })
}

function answerQuestion(e){

}

var questionArray = [
  {
  questionText : 'Commonly used data types DO NOT include:',
  answers : [
    { text: "strings", correct: false }, 
    { text: "booleans", correct: false },
    { text: "alerts", correct: true },
    { text: "numbers", correct: false }
    ]
  } 
]