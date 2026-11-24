//simulate the roll of two dices
function diceRoll() {
    let rollResults = []
    rollResults.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    rollResults.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    return rollResults
}