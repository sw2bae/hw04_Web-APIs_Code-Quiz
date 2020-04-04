var questionsArray = [
    { quesiton : "question 1",
    
    choice : ["1","2","3","4","5"],

    answer : "1"
    },
    { quesiton : "question 2",
    
    choice : ["1","2","3","4","5"],

    answer : "2"
    },
    { quesiton : "question 3",
    
    choice : ["1","2","3","4","5"],

    answer : "3"
    },
    { quesiton : "question 4",
    
    choice : ["1","2","3","4","5"],

    answer : "4"
    },
    { quesiton : "question 5",
    
    choice : ["1","2","3","4","5"],

    answer : "5"
    }
]; 

var scoreEl = $("#score");
var timeEl = $("#time");
var quesitonEl = $("question");
var multipleChoiceEl = $("multipleChoice");

var timeLeft = questionsArray.length * 20;



function startQuize(){


}


function timeFunction(){
var timer = setInterval(function() {
    timeEl.text("Time : "+ timeLeft +" seconds remaining");
    timeLeft--;

    if (timeLeft === 0) {
      timeEl.text("Time Over");
    
      clearInterval(timer);
    }

  }, 1000);
}





{/* <div class="container">
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

</div> */}