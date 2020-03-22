var wordList = []
var trueAnswerNumber

var totalCorrect = 0
var totalIncorrect = 0

$( document ).ready(function() {
    getData()
});

// get data from firebase
function getData(){
    db.collection("words").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            wordList.push(doc.data())
        });
        wordList.sort(function(a,b){
            return a.id - b.id
        }).reverse()
        // add random question to html
        getRandomQuiz()
    });
}

// get random question
function getRandomQuiz(){

    // select question
    var randomNumberForQuestion = randomIntFromInterval(0,wordList.length)
    $("#question-card p").html(wordList[randomNumberForQuestion].word)
    
    // select any false answer number -> beetween 0 and array.length()
    var randomNumberForfalseAnswer = randomIntFromInterval(0,wordList.length)

    // check for different values
    while(randomNumberForQuestion == randomNumberForfalseAnswer) {
        randomNumberForfalseAnswer = randomIntFromInterval(0,wordList.length)
    }

    //choose true answer's order -> 1 or 2
    trueAnswerNumber = randomIntFromInterval(1,2)
    // put answers to html tags
    switch(trueAnswerNumber) {
        case 1:
            $("#first-answer p").html(wordList[randomNumberForQuestion].description)
            $("#second-answer p").html(wordList[randomNumberForfalseAnswer].description)
          break;
        case 2:
            $("#first-answer p").html(wordList[randomNumberForfalseAnswer].description)
            $("#second-answer p").html(wordList[randomNumberForQuestion].description)
          break;
        default:      
    }
}

// check answer
function checkAnswer(selected){
   if(selected == trueAnswerNumber){
        totalCorrect = totalCorrect + 1
        var trueText ='<label class="trueColor"><span>'+totalCorrect+'&nbsp;</span> true</label>'
        $("#true").html(trueText)

        var falseText ='<label><span>'+totalIncorrect+'</span> false</label>'
        $("#false").html(falseText)
        // get new question
        getRandomQuiz()
   } else {
        totalIncorrect = totalIncorrect + 1
        var falseText ='<label class="falseColor"><span>'+totalIncorrect+'</span> false</label>'
        $("#false").html(falseText)

        var trueText ='<label><span>'+totalCorrect+'&nbsp;</span> true</label>'
        $("#true").html(trueText)

        // get new question
        getRandomQuiz()
   }
}
// get user choose
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowLeft":
        checkAnswer(1)
        break;
      case "ArrowRight":
        checkAnswer(2)
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

  // get random
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }