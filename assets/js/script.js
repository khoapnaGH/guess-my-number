const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

// random number
let randomNumber, scoreNumber;
let highscoreNumber = 0;
let play = true;

const init = function () {
    play = true;
    randomNumber = Math.trunc(Math.random() * 6) + 1;
    scoreNumber = 20;
    number.textContent = "?";
    number.style.width = "15rem";
    message.textContent = "Start guessing...";
    body.style.backgroundColor = "#222";
    score.textContent = "20";
    guess.value = "";
};

const contentMessage = function (content) {
    message.textContent = content;
};

init();

check.addEventListener("click", function () {
    if (play && Number(guess.value) > 0 && Number(guess.value) < 21) {
        if (Number(guess.value) === randomNumber) {
            number.textContent = randomNumber;
            number.style.width = "30rem";
            contentMessage("🎉 Correct Number!");
            body.style.backgroundColor = "#60b347";
            play = false;
            if (highscoreNumber < scoreNumber) {
                highscoreNumber = scoreNumber;
                score.textContent = scoreNumber;
                highscore.textContent = score.textContent;
            }
        } else if (Number(guess.value) < randomNumber) {
            if (scoreNumber > 0) {
                contentMessage("📉 Too low!");
                scoreNumber--;
                score.textContent = scoreNumber;
            } else {
                contentMessage("💥 You lost the game!");

                play = false;
            }
        } else {
            if (scoreNumber > 0) {
                contentMessage("📈 Too high!");
                scoreNumber--;
                score.textContent = scoreNumber;
            } else {
                contentMessage("💥 You lost the game!");
                play = false;
            }
        }
    } else {
        contentMessage("⛔️ No number!");
    }
});

again.addEventListener("click", init);
