// Webopoly Wiki – dice roller (dice.html)
const rollButton = document.getElementById("roll-button");
const firstDice = document.getElementById("first-dice");
const secondDice = document.getElementById("second-dice");
const diceBox = document.getElementById("dice");
const result = document.getElementById("dice-result");

let doublesInARow = 0;

// One die: a whole number from 1 to 6
function rollOne() {
    return Math.floor(Math.random() * 6) + 1;
}

function showDie(img, value, label) {
    img.src = "images/dice/dice_" + value + ".png";
    img.alt = label + " die: " + value;
}

// Simulate the roll of two dice
function diceRoll() {
    const a = rollOne();
    const b = rollOne();
    showDie(firstDice, a, "First");
    showDie(secondDice, b, "Second");

    // Restart the shake animation
    diceBox.classList.remove("rolling");
    void diceBox.offsetWidth;
    diceBox.classList.add("rolling");

    let text;
    if (a === b) {
        doublesInARow++;
        text = doublesInARow >= 3
            ? "Third double in a row! Go straight to Bug in prod."
            : "Double " + a + "! Move " + (a + b) + " squares, then play again.";
        if (doublesInARow >= 3) doublesInARow = 0;
    } else {
        doublesInARow = 0;
        text = "Move " + (a + b) + " squares.";
    }
    result.textContent = text;
}

rollButton.addEventListener("click", diceRoll);
