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
    startBtn.addClass("d-none");
    timeFunction();

    quesitonFunction();

});






function timeFunction() {
    var timer = setInterval(function () {
        timeEl.text("Time : " + timeLeft + " seconds remaining");
        timeLeft--;

        if (timeLeft === 0) {
            timeEl.text("Time Over");

            clearInterval(timer);

        }
    }, 1000);
}

function quesitonFunction() {
    
    function addQuestion(){

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
            timeLeft=timeLeft-20;
            answerCheckEl.text("WRONG!");
        }else{
            answerCheckEl.text("CORRECT!");
        }

        questionNum++;
        quesitonAsk = questionsArray[questionNum];
        userInputEl.empty();


        if (questionNum < questionsArray.length){
        quesitonFunction();
        } else{
            
            $(".display-4").text("GAME OVER");
            $("#question").text("YOUR SCORE IS : " + timeLeft);
            answerCheckEl.empty();
            

            var userNameInput = $("<input>");
                userNameInput
                    .addClass("form-control")
                    .attr("id","input-name")
                    .attr("placeholder","Name")
                    .appendTo(answerCheckEl);

            var submitBtn = $("<button>");
                submitBtn
                    .addClass("btn btn-primary mt-5")
                    .attr("id","submit-Btn")
                    .text("Submit")
                    .appendTo(answerCheckEl);
            }
                    
        
    });
}









/* <div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" id = "score" href="#">Score</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="navbarText">
        <span class="navbar-text" id = "time">
            Time :
        </span>
    </div>
</nav>

<div class="jumbotron">
    <h1 class="display-4">Quiz</h1>
    <p class="lead" id="question">
        <!--  -->
    </p>
    <hr class="my-4">
    <div id = "multipleChoice">
        <!--  -->
    </div>
    <a class="btn btn-primary btn-lg" id = "start" href="#" role="button">Start</a>
</div>

</div> */