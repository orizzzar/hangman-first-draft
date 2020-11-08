window.addEventListener("load", init);
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts = 5;
function init() {
    writeAlphabetToTheDom();
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
//# sourceMappingURL=app.js.map