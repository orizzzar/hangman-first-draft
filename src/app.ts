window.addEventListener("load", init);

//Global variables
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
let attempts: number = 5;

/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
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
    keyboard.append(divKey);
  });
}
