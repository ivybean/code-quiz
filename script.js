var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainer = document.getElementById("question-container")
let randomQuestions, questionNumber
var question = document.getElementById("question")
var answerButton = document.getElementById('answer-buttons')
var placeButtons = document.getElementById('pbtn')
var totalScore = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  questionNumber+
  answerButton.classList.add('hide')
  nextQuestion()
})

function startGame(){
  startButton.classList.add('hide')
  questionContainer.classList.remove("hide")
  question.classList.remove("hide")
  questionNumber = 0
  nextQuestion()
}

function nextQuestion(){
  console.log(questionNumber)
  if (questionNumber > 4){
    restartGame()
  }else {
    clearAnswers()
    askQuestion(questionArray[questionNumber])
    answerButton.classList.remove("hide")
  }
}

function askQuestion(questionText){
  question.innerText = questionText.questionText
  questionText.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.addEventListener('click', answerQuestion) 
    answerButton.appendChild(button)
  })
}

function clearAnswers(){
  nextButton.classList.add('hide')
  while (answerButton.firstChild){
    answerButton.removeChild (answerButton.firstChild)
  }
}

function answerQuestion(e){
  nextButton.classList.remove('hide')
  questionNumber++
}

function restartGame(){
  nextButton.classList.add('hide')
  question.classList.add('hide')
  var restartButton = document.createElement('button')
  restartButton.classList.add('btn')
  restartButton.innerText = ("Restart")
  questionNumber = 0
  // restartButton.addEventListener('click', nextQuestion())
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
  },
  {
  questionText : 'The condition in an if/else statement is enclosed within ________.',
  answers : [
    { text: "quotes", correct: false }, 
    { text: "curly brackets", correct: false },
    { text: "parentheses", correct: true },
    { text: "square brackets", correct: false }
    ]
  },
  {
    questionText : 'Arrays in JavaScript can be used to store ________.',
    answers : [
      { text: "numbers and strings", correct: false }, 
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true }
      ]
    },
  {
    questionText : 'String values must be enclosed within ________ when being assigned to variables.',
    answers : [
      { text: "commas", correct: false }, 
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false }
      ]
    },
  {
    questionText : 'A very useful tool used during development and debugging for printing content to the debugger is',
    answers : [
      { text: "JavaScript", correct: false }, 
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true }
      ]
    }    
]