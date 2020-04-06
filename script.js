var questionsArray = [
    {
        quesiton: "Tequila, grenadine and orange juice make up what drink?",

        choice: ["A. Orange Spike", "B. Sweet Jose", "C. Orange Margarita", "D. Tequila Sunset", "E. Tequila Sunrise"],

        answer: 4
    },
    {
        quesiton: "What cocktail is made from Kahlua, vodka, and cream?",

        choice: ["A. Root Beer Float", "B. Kahlua And Cream", "C. Black Russian", "D. White Russian", "E. Cookie And Cream"],

        answer: 3
    },
    {
        quesiton: "What is 1 shot of cinnamon schnapps and followed by 1 shot of peppermint schnapps called?",

        choice: ["A. Sex On The Beach", "B. Fire And Ice", "C. Sweet And Sour", "D. Hot And Spicy", "E. Grasshopper"],

        answer: 2
    },
    {
        quesiton: "What cocktail mixes 2 oz. bourbon with 2 tbsp. lemon juice and 2 tsp. sugar syrup?",

        choice: ["A. Bourbon Sour", "B. Bourbon Punch", "C. Pedro Bourbon", "D. Bourbonville", "E. Bourbon Whiskey"],

        answer: 0
    },
    {
        quesiton: "A Black Russian is made with vodka and what?",

        choice: ["A. Black Label", "B. Kahlua", "C. Creme De Cacao", "D. Coffee De Mint", "E. Creme De Coffee "],

        answer: 2
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

    
        var nameKey = Object.keys(localStorage);
        var scoreValue = Object.values(localStorage);
        console.log(nameKey);
        console.log(scoreValue);

        for (var i = 0; i < localStorage.length; i++){
            var history = $("<div>");
            history
                .attr("id","userHistory")
                .text(nameKey[i] + " : " + scoreValue[i])
                .prependTo($("#question"));
        }


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

