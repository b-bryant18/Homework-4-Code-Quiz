// Buttons
var welcome = document.getElementById("Welcome");
var startButton = document.querySelector("#play");
var questionTitle = document.getElementById("questionTitle");
var questionPrompt = document.getElementById("questionPrompt");
var card = $("#quiz-area");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answer
// Questions 
var questions = [
    {
        title: "The Mandalorian's armor is made of what material?",
        choices: ["Steel", "Titanium", "Cobalt", "Beskar"],
        answer: "Beskar"
    },
    {
        title: "What weapon does the Mandalorian have on his left wrist?",
        choices: ["Knife", "Flamethrower", "Taser", "Blaster"],
        answer: "Flamethrower"
    },
    {
        title: "What is the moral code of the Mandalorians?",
        choices: ["I gotta get me one of those", "Rangers Lead the Way", "Get some", "This is the way"],
        answer: "This is the way"
    },
    {
        title: "Who does Mando hunt down in order to retrieve his stolen spaceship parts?",
        choices: ["Jawas", "Tusken Raiders", "Stormtroopers", "Jedi"],
        answer: "Jawas"
    },
    {
        title: "What are the Mandalorians known for?",
        choices: ["Pod-racing", "Smuggling", "Bounty hunting", "Blue milk"],
        answer: "Bounty hunting"
    },
]
// Display functions
$(document).ready(function () {
    // questionPrompt.style.display = "none";
    // ending.style.display = "none";

    // Start button function

    $("#start-btn").on("click", function () {
        welcome.style.display = "none";
        questionPrompt.style.display = "block";

        questionTitle.textContent = questions[i].question;
        answer1.textContent = questions[0].choices[0];
        answer2.textContent = questions[0].choices[1];
        answer3.textContent = questions[0].choices[2];
        answer4.textContent = questions[0].choices[3];
    });

    for (var i = 0; i < questions.length; i++) {

        var currentQuestion = questions[i];
        card.append("<h1>" + currentQuestion.title + "</h1>");
        card.append("<button type='submit'>" + currentQuestion.choices[0] + "</button>")
        card.append("<button type='submit'>" + currentQuestion.choices[1] + "</button>")
        card.append("<button type='submit'>" + currentQuestion.choices[2] + "</button>")
        card.append("<button type='submit'>" + currentQuestion.choices[3] + "</button>")

        //Functions for when correct answers are chosen by user.
        function checkAnswer(answer) {
            if (answer === questions[currentQuestion].correct) {
                //answer is right
                answerCorrect();
            } else {
                //answer is wrong
                answerIncorrect();
            }
        }
        // function answerCorrect() {
        // alert("Correct")
        // console.log(currentQuestion.answer);
        // if (questions.title[0].choices === "Beskar");
        // alert("Correct!");
        // } else { 
        //     alert("Incorrect!");
        }

        // questionTitle.textContent = currentQuestion.title; 
        // console.log (currentQuestion);

        // answer1.textContent = currentQuestion.choices[0];
        // answer2.textContent = currentQuestion.choices[1];
        // answer3.textContent = currentQuestion.choices[2];
        // answer4.textContent = currentQuestion.choices[3];

        // for (var j = 0; j <currentQuestion.choices.length; j ++) {
        //     console.log (currentQuestion.choices[j]);
        //     answer1.textContent = currentQuestion.choices[j];
        // }
    }

    // // Next question function
    // nextQuestion();

    // function nextQuestion() {
    //     $(".btn-block").on("click"), function () {
    //         currentQuestion++;
    //         if (currentQuestion);
    //     }
    // }
    // for (var i = 0; i < questions.length; i++) {
    //     // console.log(questions[i]);

    // }
})

    // How do I make the start quiz btn take me to the first question?
    // How do I get the first question to appear without showing answers?