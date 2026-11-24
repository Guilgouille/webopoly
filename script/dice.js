//get rolling button element
let rollButton = document.getElementById("roll-button");

//simulate the roll of two dices
function diceRoll() {
    let rollResults = []
    rollResults.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    rollResults.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    
    document.getElementById("first-dice").src = "img/dice/dice_"+rollResults[0]+".png"
    document.getElementById("second-dice").src = "img/dice/dice_"+rollResults[1]+".png"
}

rollButton.addEventListener("click", diceRoll);