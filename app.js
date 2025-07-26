const app = document.getElementById('app');

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;

function showStartScreen() {
  app.innerHTML = `
    <div class="start">
      <button id="startButtonBeginner" class="beginner">Beginner</button>
      <div class="divider"></div>
      <button id="startButtonHard" class="hard">Hard</button>
    </div>
  `;

  document.getElementById('startButtonBeginner').addEventListener('click', () => {
    startQuiz('beginner');
  });

  document.getElementById('startButtonHard').addEventListener('click', () => {
    startQuiz('hard');
  });
}

function startQuiz(difficulty) {
  currentQuestion = 0;
  score = 0;
  currentQuestions = difficulty === 'beginner' ? beginnerQuestions : hardQuestions;
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentQuestion];
  app.innerHTML = `
    <div class="quiz-container">
      <div class="question">${q.question}</div>
      <div class="answers">
        ${q.options.map(opt => `<button class="answer-btn">${opt}</button>`).join('')}
      </div>
    </div>
  `;

  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(btn.textContent));
  });
}

function selectAnswer(selectedOption) {
  const correctAnswer = currentQuestions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  app.innerHTML = `
    <div class="quiz-container">
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} / ${currentQuestions.length}</p>
      <button id="resetBtn">Try Again</button>
    </div>
  `;

  document.getElementById('resetBtn').addEventListener('click', resetQuiz);
}

function resetQuiz() {
  showStartScreen();
}


document.addEventListener('DOMContentLoaded', () => {
  showStartScreen();
});



const beginnerQuestions = [
  {
    question: "What city is Dying Light set in?",
    options: ["Harran", "Gotham", "Midgar", "Raccoon City"],
    answer: "Harran",
  },
  {
    question: "What type of game is Dying Light?",
    options: ["Racing", "Survival Horror", "Puzzle", "RTS"],
    answer: "Survival Horror",
  },
  {
    question: "What is the main movement style in Dying Light?",
    options: ["Driving", "Flying", "Parkour", "Swimming"],
    answer: "Parkour",
  },
  {
    question: "What happens during nighttime in the game?",
    options: ["You gain health", "Zombies get stronger", "You can fly", "Zombies disappear"],
    answer: "Zombies get stronger",
  },
  {
    question: "Which tool is used to repel infected at night?",
    options: ["Flashbang", "UV Light", "Molotov", "Firecracker"],
    answer: "UV Light",
  },
  {
    question: "What is the default weapon type early in the game?",
    options: ["Firearms", "Swords", "Melee weapons", "Bows"],
    answer: "Melee weapons",
  },
  {
    question: "Which time of day is more dangerous?",
    options: ["Morning", "Evening", "Night", "Afternoon"],
    answer: "Night",
  },
  {
    question: "How do you heal yourself in Dying Light?",
    options: ["Health packs", "Bandages", "Sleeping", "Food"],
    answer: "Health packs",
  },
  {
    question: "What genre best describes Dying Light?",
    options: ["Puzzle RPG", "FPS Survival Horror", "Sports", "Turn-based Strategy"],
    answer: "FPS Survival Horror",
  },
  {
    question: "Which enemy appears mostly at night?",
    options: ["Volatiles", "Biters", "Spitters", "Goons"],
    answer: "Volatiles",
  },
];

const hardQuestions = [
  {
    question: "What is the name of Dying Light's main protagonist?",
    options: ["Aiden Caldwell", "Kyle Crane", "Jack Carver", "Chris Walker"],
    answer: "Kyle Crane",
  },
  {
    question: "Which organization sends Crane to Harran?",
    options: ["GRE", "NATO", "UN", "Airdrop Command"],
    answer: "GRE",
  },
  {
    question: "Which faction opposes Rais' men?",
    options: ["The Tower", "The Renegades", "The Bandits", "The Reapers"],
    answer: "The Tower",
  },
  {
    question: "Who is the primary antagonist in the original Dying Light?",
    options: ["Tahir", "Kadir Suleiman (Rais)", "Spike", "Rahim"],
    answer: "Kadir Suleiman (Rais)",
  },
  {
    question: "What does the Antizin drug do?",
    options: ["Boosts stamina", "Cures infection", "Suppresses symptoms", "Makes you immune"],
    answer: "Suppresses symptoms",
  },
  {
    question: "What DLC added a buggy (drivable vehicle) to the game?",
    options: ["The Following", "Nightfall", "Quarantine", "Aftershock"],
    answer: "The Following",
  },
  {
    question: "What major gameplay mechanic is emphasized in 'The Following' DLC?",
    options: ["Underwater combat", "Driving", "Firearms", "Stealth"],
    answer: "Driving",
  },
  {
    question: "What virus is responsible for the outbreak in Dying Light?",
    options: ["Cordyceps", "T-Virus", "THV", "Z-Virus"],
    answer: "THV",
  },
  {
    question: "Which of the following is **not** a zombie type in Dying Light?",
    options: ["Demolisher", "Goon", "Wailer", "Toad"],
    answer: "Wailer",
  },
  {
    question: "What color eyes do Volatiles have?",
    options: ["Red", "Blue", "Yellow", "White"],
    answer: "Yellow",
  },
];


