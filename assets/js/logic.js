//Keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

//DOM element variables
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    //remove start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    //display questions
    questionsEl.removeAttribute("class");

    //start timer
    timerId = setInterval(clockTick, 1000);

    //display starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    //get current question object from the array
    var currentQuestion = questions[currentQuestionIndex];

    //updates title for current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    //remove past question choices
    choicesEl.innerHTML = "";

    //loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        //make a new button for each answer choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + "." + choice;

        //click event listener for each answer choice
        choiceNode.onclick = questionClick;

        //display choiceNodes to page
        choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    //check for wrong answer
    if (this.value !== questions[currentQuestionIndex].answer) {
        //remove time
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        //display new time on page
        timerEl.textContent = time;

        feedbackEl.textContent = "WRONG ANSWER DETECTED";
    } else {
        feedbackEl.textContent = "Whoop!";
    }

    //flash correct/incorrect feedback text for 1/2 a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    //proceed to next question
    currentQuestionIndex++;

    //check to see if there are any remaining questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    //stop timer
    clearInterval(timerId);

    //show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    //display final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    //hide question section
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    //update the time
    time--;
    timerEl.textContent = time;

    //check if time is up
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    //get value of intials input 
    var initials = initialsEl.value.trim();

    //check to see if input value is empty
    if (initials !== "") {
        //pull saved scores from local storage (if none, set to empty array)
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        //create new score object for current player
        var newScore = {
            score: time,
            intials: initials
        };

        //save highscore to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        //redirect to next page
        window.location.href = "highscores.html"
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

//user submits their initials
submitBtn.onclick = saveHighScore;

//button for starting quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;