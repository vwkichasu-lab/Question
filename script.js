// ===============================
// WEB TECHNOLOGY QUIZ
// ===============================

// Current question
let currentQuestion = 0;

// Get elements
const card = document.getElementById("flipCard");
const questionText = document.getElementById("questionText");
const questionNo = document.getElementById("questionNo");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const flipBtn = document.getElementById("flipBtn");

const dots = document.querySelectorAll(".dot");

const themeColors = [
    { progress: "#7b3fe4", card: "rgba(123, 97, 255, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#ffd54f" },
    { progress: "#1e88e5", card: "rgba(30, 136, 229, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#ffe082" },
    { progress: "#43a047", card: "rgba(67, 160, 71, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#c8e6c9" },
    { progress: "#fb8c00", card: "rgba(251, 140, 0, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#ffe0b2" },
    { progress: "#e53935", card: "rgba(229, 57, 53, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#ffcdd2" },
    { progress: "#00897b", card: "rgba(0, 137, 123, 0.28)", border: "rgba(255,255,255,0.35)", accent: "#b2dfdb" }
];

function applyQuestionTheme(){

    const theme = themeColors[currentQuestion % themeColors.length];

    questionNo.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionNo.style.background = theme.progress;
    questionNo.style.color = "#fff";

    card.style.setProperty("--card-bg", theme.card);
    card.style.setProperty("--card-border", theme.border);
    card.style.setProperty("--card-accent", theme.accent);

}

function updateQuestionDisplay(){

    questionText.innerHTML = questions[currentQuestion];

    questionNo.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    const frontTitle = card.querySelector(".flip-card-front h2");
    const frontHint = card.querySelector(".flip-card-front p");

    if(frontTitle){
        frontTitle.textContent = `QUESTION ${currentQuestion + 1}`;
    }

    if(frontHint){
        frontHint.textContent = currentQuestion === questions.length - 1
            ? "Last question — click to reveal."
            : "Click anywhere to reveal the question.";
    }

    card.classList.remove("flipped");
    applyQuestionTheme();
    updateDots();

}

// Load first question
loadQuestion();

// =========================
// Load Question
// =========================

function loadQuestion(){

    updateQuestionDisplay();

}

// =========================
// Flip Card
// =========================

function flipCard(){

    card.classList.toggle("flipped");

}

// Click card to flip
card.addEventListener("click",flipCard);

// Flip button
flipBtn.addEventListener("click",flipCard);

// =========================
// Next
// =========================

nextBtn.addEventListener("click",()=>{

    if(currentQuestion<questions.length-1){

        currentQuestion++;

        loadQuestion();

    }

});

// =========================
// Previous
// =========================

prevBtn.addEventListener("click",()=>{

    if(currentQuestion>0){

        currentQuestion--;

        loadQuestion();

    }

});

// =========================
// Dots
// =========================

function updateDots(){

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentQuestion].classList.add("active");

}

// =========================
// Keyboard Support
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key===" "){

        e.preventDefault();

        flipCard();

    }

});