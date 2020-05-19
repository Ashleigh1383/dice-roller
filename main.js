
const inputBox = document.querySelector("#input-box")
const rollButton = document.querySelector(".roll")
const totalSum = document.querySelector(".total")
const allRollsButton = document.querySelector(".show-all-rolls")
const dieRolls1 = document.querySelector(".all-rolls")
const resetButton = document.querySelector(".reset")
const dieRolls = []

rollButton.addEventListener("click", function() {
console.log("button clicked")

let userInput = parseInt(inputBox.value)
console.log(inputBox.value)


    while(dieRolls.length < userInput) {
        let dieRoll = Math.floor(Math.random() * 6 + 1)
        dieRolls.push(dieRoll)
        console.log(dieRolls)
    }

    let totalSum1 = dieRolls.reduce(add,0);
        function add(accumulator, a) {
        return accumulator + a;
    
        }  
    
    totalSum.innerHTML = totalSum1;
    
   
    console.log(totalSum1)
     inputBox.value = ""
})

allRollsButton.addEventListener("click", function() {
    
    let listCounter = 0
    while (listCounter < dieRolls.length) {
        
        const newDiceString = '<li class="dice">' + dieRolls[listCounter] + "</li>"     
        
        console.log(newDiceString);
        dieRolls1.innerHTML += newDiceString;
        
        listCounter++
    }
    
    console.log("button clicked")
    console.log(dieRolls1)
    
})

resetButton.addEventListener("click", function() {
    console.log("button clicked")
    totalSum.innerHTML = ""
    dieRolls1.innerHTML = ""
    
})



