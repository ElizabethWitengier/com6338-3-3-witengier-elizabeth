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
function runQuiz() {
  var numOfAgrees = 0
  for (var i = 0; i < questionsArr.length; i++) {
    var question = questionsArr[i]
    var answer = confirm(question)
    if (answer) {
      numOfAgrees++
    }
  }
  var score = ((answer / questionsArr.length) * 100)
  if (score = 100) {
    alert("You got a 100%!")
  } else {
    alert("Your total is " + (score.toFixed(2) + '%'))
  }
}  