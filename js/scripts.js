$(document).ready(function() {

  var quizBoard = document.getElementById('quiz');
  var resultBoard = document.getElementById('results');
  var finishButton = document.getElementById('submit');
  var allQuestions = [{
      question: "What do dragonflies prefer to eat?",
      answers: {
        a: "Bee",
        b: "Dogs",
        c: "Mosquitoes"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is the largest species of the tiger?",
      answers: {
        a: "Asian Tiger",
        b: "African tiger",
        c: "Siberian tiger"
      },
      correctAnswer: "c"
    },
    {
      question: "In what year was Google launched on the web?",
      answers: {
        a: "1980",
        b: "1990",
        c: "2001",
        d: "1998"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the country top-level domain of Kenya?",
      answers: {
        a: ".co",
        b: ".ke",
        c: ".co.uk",
        d: ".co.ke"
      },
      correctAnswer: "b"
    },
    {
      question: "In computing what is Ram short for?",
      answers: {
        a: "Random Access Memory",
        b: "Read Only Memory",
        c: "Read Access Momory",
        d: "None"
      },
      correctAnswer: "a"
    }
  ];
  createOptionQuiz();

  finishButton.addEventListener("click", viewResults);

  function createOptionQuiz() {

    var output = [];

    allQuestions.forEach(
      (currentQuestion, questionNumber) => {

        var answers = [];

        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );

      }

    );
    quizBoard.innerHTML = output.join('');
  }

});
