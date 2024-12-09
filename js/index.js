const guessButton = document.getElementById("Guess");
const outputText = document.getElementById("outputText");
const pGuesses = document.getElementById("pGuesses");
const startButton = document.getElementById("StartOver");
const guessesRemaining = document.querySelector("span");
let randomNumber = Math.ceil(Math.random() * 100);
let gameFinish = false;
let guessCount = 0;

function resetGame() {
  outputText.innerHTML = "";
  outputText.style.color = "black";
  guessCount = 0;
  gameFinish = false;
  guessesRemaining.innerText = 5;
  randomNumber = Math.ceil(Math.random() * 100);
  document.getElementById("resultList").innerHTML = "";
  document.getElementById("userInput").value = "";
}

startButton.addEventListener("click", resetGame);

function checkNumber() {
  if (gameFinish) {
    outputText.innerHTML = "Game over. Click 'Start Over' to play again.";
    return;
  }

  const input = parseInt(document.getElementById("userInput").value);

  if (isNaN(input) || input < 1 || input > 100) {
    outputText.innerHTML = "Please enter a valid number between 1 and 100.";
    return;
  }

  guessCount++;
  if (input === randomNumber) {
    outputText.innerHTML = "Congratulations! You guessed the right number!";
    outputText.style.color = "green";
    gameFinish = true;
  } else if (guessCount >= 5) {
    outputText.innerHTML = `You've used all your guesses. The number was ${randomNumber}.`;
    gameFinish = true;
  } else {
    outputText.innerHTML =
      input > randomNumber
        ? "Your guess is too high."
        : "Your guess is too low.";
    outputText.style.color = "red";
  }

  const li = document.createElement("li");
  li.innerText = input;
  document.getElementById("resultList").appendChild(li);

  guessesRemaining.innerText = 5 - guessCount;
}

guessButton.addEventListener("click", checkNumber);
