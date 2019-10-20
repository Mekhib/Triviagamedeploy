var questions = [
  {
    question: "What avenger has lived the longest?",
    answers: ["Thor", "Captain Marvel", "Tony Stark", "The Cap"],
    correctAnswer: "Thor"
  },
  {
    question: "what was the name of the first iphone?",
    answers: ["Iphone", "Iphone 2g", "Iphone 3gs", "Iphone 1"],
    correctAnswer: "Iphone 2g"
  },
  {
    question: "what is the biggest loss leader for mcdonaolds?",
    answers: ["fries", "Drinks", "Big Mac", "Other"],
    correctAnswer: "fries"
  },
  {
    question: "Which was Micheal Jackson's second solo album?",
    answers: ["Off the wall", "Thriller", "bad", "Other"],
    correctAnswer: "Thriller"
  },
  {
    question: "Which shrek has the highest rotten tomato score?",
    answers: ["Shrek", "Shrek 2", "Sherk 3", "Sherk 4"],
    correctAnswer: "Shrek 2"
  },
  {
    question: "on spongebob, what is Plankton's first name?",
    answers: ["Karen", "evil", "mary", "Sheldon"],
    correctAnswer: "Sheldon"
  },
  {
    question: "who founded microsoft",
    answers: ["paul allen", "paul george", "pauly d", "steve woznizak"],
    correctAnswer: "paul allen"
  },
  {
    question: "who always dies on south park?",
    answers: ["kenny", "cartman", "Eric", "token"],
    correctAnswer: "kenny"
  }
];

var correct = 0;
var incorrect = 0;
var quizcard = $("#quiz-area");

function quiz() {
  questions.forEach(function(question) {
    console.log(question);
    card.append("<h2>" + question.question + "</h2>");
  });

  $("#start").on("click", function() {
    console.log("you clicked me!");
    quiz();
  });
}
