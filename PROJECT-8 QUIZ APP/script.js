const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyperlink Mark Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
    explanation: "HTML is used to structure webpages."
  },

  {
    question: "Which language is used for styling webpages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS",
    explanation: "CSS is used for webpage styling."
  },

  {
    question: "Which language adds interactivity to websites?",
    options: ["CSS", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    explanation: "JavaScript handles website interactivity."
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Apple"],
    answer: "Netscape",
    explanation: "JavaScript was created at Netscape."
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//",
    explanation: "// is used for single-line comments."
  },

  {
    question: "Which HTML tag is used for images?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>",
    explanation: "<img> tag displays images."
  },

  {
    question: "Which CSS property changes text color?",
    options: ["background", "font-style", "color", "text-align"],
    answer: "color",
    explanation: "The color property changes text color."
  },

  {
    question: "Which keyword declares variables in JavaScript?",
    options: ["int", "string", "var", "define"],
    answer: "var",
    explanation: "var is one way to declare variables."
  },

  {
    question: "Which method prints in console?",
    options: [
      "console.log()",
      "print()",
      "echo()",
      "write()"
    ],
    answer: "console.log()",
    explanation: "console.log() prints messages in browser console."
  },

  {
    
  question: "Which HTML tag creates a hyperlink?",
  options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;hyper&gt;"],
  answer: "&lt;a&gt;",
  explanation: "&lt;a&gt; tag creates hyperlinks."
}
  
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");

const questionNumber = document.getElementById("questionNumber");

const totalTimer = document.getElementById("totalTimer");
const questionTimer = document.getElementById("questionTimer");

let currentQuestion = 0;
let userAnswers = [];
let score = 0;

let totalSeconds = 0;
let questionSeconds = 0;

let totalInterval;
let questionInterval;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  startTotalTimer();
  loadQuestion();
}

function startTotalTimer() {

  totalInterval = setInterval(() => {
    totalSeconds++;
    totalTimer.innerText = totalSeconds;
  }, 1000);
}

function startQuestionTimer() {

  questionSeconds = 0;

  questionInterval = setInterval(() => {
    questionSeconds++;
    questionTimer.innerText = questionSeconds;
  }, 1000);
}

function loadQuestion() {

  clearInterval(questionInterval);
  startQuestionTimer();

  const q = questions[currentQuestion];

  questionNumber.innerText = currentQuestion + 1;

  questionText.innerText = q.question;

  optionsContainer.innerHTML = "";

  q.options.forEach(option => {

    const div = document.createElement("div");

    div.classList.add("option");

    div.innerText = option;

    div.addEventListener("click", () => selectOption(div, option));

    optionsContainer.appendChild(div);
  });
}

function selectOption(element, selectedOption) {

  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => {
    opt.classList.remove("selected");
  });

  element.classList.add("selected");

  userAnswers[currentQuestion] = {
    question: questions[currentQuestion].question,
    selected: selectedOption,
    correct: questions[currentQuestion].answer,
    explanation: questions[currentQuestion].explanation,
    isCorrect: selectedOption === questions[currentQuestion].answer,
    timeTaken: questionSeconds
  };
}

nextBtn.addEventListener("click", () => {

  if (!userAnswers[currentQuestion]) {
    alert("Please select an answer!");
    return;
  }

  if (userAnswers[currentQuestion].isCorrect) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResults();
  }
});

function showResults() {

  clearInterval(totalInterval);
  clearInterval(questionInterval);

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const correctAnswers = score;
  const wrongAnswers = questions.length - score;

  const percentage = ((score / questions.length) * 100).toFixed(2);

  document.getElementById("score").innerText =
    `${score} / ${questions.length}`;

  document.getElementById("correct").innerText = correctAnswers;

  document.getElementById("wrong").innerText = wrongAnswers;

  document.getElementById("percentage").innerText = percentage;

  document.getElementById("finalTime").innerText = totalSeconds;

  let grade = "";
  let feedback = "";

  if (percentage >= 90) {
    grade = "A+";
    feedback = "Outstanding Performance!";
  }
  else if (percentage >= 75) {
    grade = "A";
    feedback = "Excellent Work!";
  }
  else if (percentage >= 60) {
    grade = "B";
    feedback = "Good Job!";
  }
  else if (percentage >= 40) {
    grade = "C";
    feedback = "Needs Improvement.";
  }
  else {
    grade = "F";
    feedback = "Better Luck Next Time.";
  }

  document.getElementById("grade").innerText = grade;

  document.getElementById("feedback").innerText = feedback;

  const reviewContainer =
    document.getElementById("reviewContainer");

  userAnswers.forEach((answer, index) => {

    const div = document.createElement("div");

    div.classList.add("review-box");

    div.innerHTML = `
      <h3>Question ${index + 1}</h3>

      <p><strong>Question:</strong> ${answer.question}</p>

      <p><strong>Your Answer:</strong> ${answer.selected}</p>

      <p><strong>Correct Answer:</strong> ${answer.correct}</p>

      <p>
        <strong>Status:</strong>
        <span class="${answer.isCorrect ? "correct" : "wrong"}">
          ${answer.isCorrect ? "Correct" : "Incorrect"}
        </span>
      </p>

      <p><strong>Time Taken:</strong> ${answer.timeTaken} sec</p>

      <p><strong>Explanation:</strong> ${answer.explanation}</p>
    `;

    reviewContainer.appendChild(div);
  });
}