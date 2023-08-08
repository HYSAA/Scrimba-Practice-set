let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

const randomHands = () => {
    for(let i=0; i< hands.length;i++){
let index=Math.floor(Math.random()*3) 
return hands[index]
    }
}
let outcome=randomHands()
console.log(outcome)
