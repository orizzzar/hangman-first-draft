window.addEventListener("load", init);

//Global variables
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");

let attempts: number;
let word: string;
const guessedLetters: string[] = [];

let words: string[] = [
  'apple', 'window', 'chart', 'channel', 'trash'
];

/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
  newRound();
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard: HTMLDivElement = document.querySelector("#keyboard");
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    divKey.addEventListener('click', () => {
      guessLetter(element);
    })
    keyboard.append(divKey);
  });
}

function newRound() {
  document.body.classList.remove("lost");
  attempts = 5;
  word = getRandomArrayElement(words);
  guessedLetters.length = 0;
  
  // Random letter (to begin with)
  const letters: string[] = word.split('');
  guessedLetters.push(getRandomArrayElement(letters));

  drawWord();
  drawAttempts();
}

function drawWord() {
  lettersInDOM.innerHTML = '';
  const letters: string[] = word.split('');

  letters.forEach((wordLetter) => {
    const letterElement: HTMLLIElement = document.createElement('li');
  
    letterElement.innerHTML = "_";
    guessedLetters.forEach((guessedLetter) => {
      if (wordLetter === guessedLetter) {
        letterElement.innerHTML = guessedLetter;
      }
    });

    lettersInDOM.append(letterElement);
  });
}

function drawAttempts() {
  attemptInDOM.innerHTML = attempts.toString();
}

function getRandomArrayElement(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)];
}

function guessLetter(letter: string) {
  if (word.includes(letter)) {
    guessedLetters.push(letter);
    drawWord();
  } else {
    if (--attempts === 0) {
      lose()
    }
    drawAttempts();
  }
}

function lose() {
  document.body.classList.add("lost");
  setTimeout(newRound, 500);
}
