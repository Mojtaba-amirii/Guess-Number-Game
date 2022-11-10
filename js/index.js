var Guess = document.getElementById("Guess");
var outputText = document.getElementById("outputText");
var randomNumber = Math.ceil(Math.random() * 100);
var pGuesses = document.getElementById("pGuesses");
var start = document.getElementById("StartOver");
const guessesRemaining = document.querySelector("span");
let gameFinish = false;
let guessCount = 0;

function again() {
  outputText.innerHTML = "Enter a number berlow";
  guessCount = 0;
  gameFinish = false;
  outputText.style.color = "red";
  guessesRemaining.innerText = parseInt(guessesRemaining.innerText);
  guessesRemaining.innerText = 5;
  randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("resultList").innerHTML = "";
}
start.addEventListener("click", again);

function checkNumber() {
  if (guessCount >= 5 || gameFinish) {
    outputText.innerHTML = "Start Over";
    return;
  }
  var input = document.getElementById("userInput").value;
  if (input == randomNumber) {
    outputText.innerHTML = "You guessed right";
    gameFinish = true;
    outputText.style.color = "green";
  } else if (guessCount === 4) {
    outputText.innerHTML = "You have no more Guesses!";
    guessCount++;
  } else if (input > randomNumber && input < 100) {
    outputText.innerHTML = "You guessed to high";
    guessCount++;
  } else if (input < randomNumber && input > 1) {
    outputText.innerHTML = "You guessed to low";
    guessCount++;
  } else if (input < 1) {
    outputText.innerHTML = "Higher Number, between 1 and 100";
    guessCount++;
  } else if (isNaN(input)) {
    outputText.innerHTML = "Thats not a number";
    guessCount++;
  } else {
    outputText.innerHTML = "between 1 and 100";
    guessCount++;
  }
  if (guessCount < 6) {
    const li = document.createElement("li");
    li.innerText = document.getElementById("userInput").value;
    document.getElementById("resultList").appendChild(li);

    guessesRemaining.innerText = parseInt(guessesRemaining.innerText) - 1;
  }
}
Guess.addEventListener("click", checkNumber);
