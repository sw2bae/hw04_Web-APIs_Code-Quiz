var questionsArray = [
    {
        quesiton: "question 1",

        choice: ["1", "2", "3", "4", "5"],

        answer: 0
    },
    {
        quesiton: "question 2",

        choice: ["A", "B", "C", "D", "E"],

        answer: 1
    },
    {
        quesiton: "question 3",

        choice: ["1", "2", "3", "4", "5"],

        answer: 2
    },
    {
        quesiton: "question 4",

        choice: ["1", "2", "3", "4", "5"],

        answer: 3
    },
    {
        quesiton: "question 5",

        choice: ["1", "2", "3", "4", "5"],

        answer: 4
    }
];

var scoreBtn = $("#score");
var timeEl = $("#time");
var quesitonEl = $("#question");
var multipleChoiceEl = $("#multipleChoice");
var startBtn = $("#start");
var userInputEl = $("#userInput");
var answerCheckEl = $("#check");

var timeLeft = questionsArray.length * 20;

var questionNum = 0;
var quesitonAsk = questionsArray[questionNum];




startBtn.click(function () {
    questionsArray;
    startBtn.addClass("d-none");
    scoreBtn.addClass("d-none");
    timeFunction();

    quesitonFunction();

});



scoreBtn.click(function(){

    $(".display-4").text("Score");

  

    startBtn.addClass("d-none");
    scoreBtn.addClass("d-none");


    var backBtn = $("<button>");
    backBtn
        .addClass("btn btn-primary mt-5 mr-5")
        .attr("id","backBtn")
        .text("Back")
        .appendTo(multipleChoiceEl);


    var clearBtn = $("<button>");
        clearBtn
            .addClass("btn btn-primary mt-5")
            .attr("id","clearBtn")
            .text("Clear")
            .appendTo(multipleChoiceEl);

    
        var scoreNote = JSON.stringify(localStorage);
        console.log(scoreNote);
    // for (var i = 0; i < localStorage.length;i++){
    //     $("#question").text(localStorage.key());
    //     }


    $("#backBtn").click(function(){
        event.preventDefault();
        location.reload();
    });
    
    $("#clearBtn").click(function(){
        event.preventDefault();
        localStorage.clear();
        $("#question").empty();

    });



});


function timeFunction() {
    var timer = setInterval(function () {
        timeEl.text("Time : " + timeLeft + " seconds remaining");
        timeLeft--;

        if (timeLeft === 0 || questionNum == questionsArray.length) {
            timeEl.text("Time Over");

            clearInterval(timer);

        }
    }, 1000);
}

function quesitonFunction() {

    function addQuestion() {

        $.each(quesitonAsk.choice, function (index, choiceNum) {
            quesitonEl.text(quesitonAsk.quesiton);
            
            var choiceBtn = $("<button>");

            choiceBtn
                .addClass("letter-button letter letter-button-color row mt-1 user-input")
                .attr("value", index)
                .text(choiceNum)
                .appendTo(userInputEl);

            

        });
    }

    addQuestion();

    $(".user-input").click(function () {

        event.stopPropagation();

        var userInput = ($(this).val());


        if (userInput != quesitonAsk.answer) {
            timeLeft = timeLeft - 20;
            answerCheckEl.text("WRONG!");
        } else {
            answerCheckEl.text("CORRECT!");
        }

        questionNum++;
        quesitonAsk = questionsArray[questionNum];
        userInputEl.empty();


        if (questionNum < questionsArray.length) {
            quesitonFunction();
        } else {

            $(".display-4").text("GAME OVER");
            $("#question").text("YOUR SCORE IS : " + timeLeft);
            answerCheckEl.empty();


            var userNameInput = $("<input>");
            userNameInput
                .addClass("form-control")
                .attr("id", "input-name")
                .attr("placeholder", "Name")
                .appendTo(answerCheckEl);

            var submitBtn = $("<button>");
            submitBtn
                .addClass("btn btn-primary mt-5")
                .attr("id", "submit-Btn")
                .text("Submit")
                .appendTo(answerCheckEl);
        }
        $("#submit-Btn").click(function() {
            event.preventDefault();
            event.stopPropagation();

            var userName = userNameInput.val();

            var finalScore = parseInt(timeLeft)+1;

            localStorage.getItem(userName);
           
            localStorage.setItem(userName, finalScore);

            answerCheckEl.empty();
            
            var scoreHistory = $("<div>");
            scoreHistory
                .addClass()
                .attr("id","score-history")
                .text("Name : " + userName + " || Score : " + (finalScore))
                .prependTo(answerCheckEl);

            var reStartBtn = $("<button>");

            reStartBtn
                .addClass("btn btn-primary mt-5")
                .attr("id", "restart-Btn")
                .text("Restart")
                .appendTo(answerCheckEl);

            $("#check").click(function() {
                event.preventDefault();
                location.reload();

            });

           
        });

    });
}



{/* <div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-brand" id = "score" href="#">Score</button>
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="navbarText">
        <span class="navbar-text" id = "time">
            Time :
        </span>
    </div>
</nav>

<div class="jumbotron">
    <h1 class="display-4">Quiz</h1>
    <p class="lead" id="question">
       
    </p>
    <hr class="my-4">
    <div id = "multipleChoice">
        <div id = "userInput">
            
        </div>
        <div id = "check">
        </div>
    </div>
    <a class="btn btn-primary btn-lg" id = "start" href="#" role="button">Start</a>
</div> */}