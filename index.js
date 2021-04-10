const readLineSync = require("readline-sync");
let userName = readLineSync.question("What's your name?\n");
console.log("Welcome " + userName + ", to Do you know Ankit!");

let score = 0;


function playQuiz(question, answer) {
  let userAnswer = readLineSync.question(question+"\n");
  if(userAnswer.toLowerCase() === answer) {
    score++;
    console.log("Right, your score is " + score);
  } else {
    console.log("Wrong, Answer is " + answer);
    console.log("your score is " + score)
  }
}

let quizQuestions = [
  {
    question: "1). What's my name?\n(a) Ankit (b) Mahesh (c) Ronak (d) Aman\n",
    answer: "a"
  },
  {
    question: "2). Who is Ankit?\n(a) Engineer (b) Doctor\n",
    answer: "a"
  },
  {
    question: "3). Ankit loves to do code.\n(a) true (b)false\n",
    answer: "a"
  },
  {
    question: "4). Where does he live?\n(a) Maharashtra (b) Karnatak (c) Gujarat (d) Assam\n",
    answer: "c"
  },
  {
    question: "5). Which language does he love?\n(a) C (b) Java (c) python (d) Javascript\n",
    answer: "d"
  }
]
for(let i = 0; i < quizQuestions.length; i++) {
  let question = quizQuestions[i].question;
  let answer = quizQuestions[i].answer;
  playQuiz(question, answer);
}
console.log("Your score is  " + score);