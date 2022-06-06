var questionsArr = [
  {
  question: "Summer is your favorite season.",
  answer: true
  },
  {
  question: "Ice cream is your favorite dessert.",
  answer: true
  },
  {
  question: "You would prefer to be at the beach rather than at the movies.",
  answer: true
  },
  {
  question: "You would rather be on a boat than a motorcycle.",
  answer: true  
  },
  {
  question: "You play the song Under the Boardwalk by The Drifters every June.",
  answer: true
  },
] 
function runQuiz(){
  var score = 0
  
  for(var i = 0; i < questionsArr.length; i++){
    var answer = confirm(questionsArr[i].question)

    if(answer === questionsArr[i].answer){
    score++
    }
  }
  
  var finalscore = Math.round(score / questionsArr.length * 100)
  
  alert("Your score was " + finalscore + '%')
  
  }

