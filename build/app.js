window.addEventListener("load", init);
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts;
let word;
const guessedLetters = [];
let words = [
    'apple', 'window', 'chart', 'channel', 'trash'
];
function init() {
    writeAlphabetToTheDom();
    newRound();
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        divKey.addEventListener('click', () => {
            guessLetter(element);
        });
        keyboard.append(divKey);
    });
}
function newRound() {
    document.body.classList.remove("lost");
    document.body.classList.remove("winner");
    attempts = 5;
    word = getRandomArrayElement(words);
    guessedLetters.length = 0;
    const letters = word.split('');
    guessedLetters.push(getRandomArrayElement(letters));
    drawWord();
    drawAttempts();
}
function drawWord() {
    lettersInDOM.innerHTML = '';
    const letters = word.split('');
    let amountGuessed = 0;
    letters.forEach((wordLetter) => {
        const letterElement = document.createElement('li');
        letterElement.innerHTML = "_";
        guessedLetters.forEach((guessedLetter) => {
            if (wordLetter === guessedLetter) {
                letterElement.innerHTML = guessedLetter;
                amountGuessed++;
            }
        });
        lettersInDOM.append(letterElement);
    });
    if (amountGuessed === letters.length) {
        win();
    }
}
function drawAttempts() {
    attemptInDOM.innerHTML = attempts.toString();
}
function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function guessLetter(letter) {
    if (!word.includes(letter)) {
        if (--attempts === 0) {
            lose();
        }
        drawAttempts();
    }
    else if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        drawWord();
    }
}
function lose() {
    document.body.classList.add("lost");
    setTimeout(newRound, 500);
}
function win() {
    document.body.classList.add("winner");
    setTimeout(newRound, 500);
}
//# sourceMappingURL=app.js.map