const welcomeEl = document.getElementById("welcome-el")
const btn=document.getElementById("btn")
// function greetUser(name) {
//     welcomeEl.textContent =` "Welcome back, ${name} 👋"`    
// }

const greetUser=(praise,name) =>{
    welcomeEl.textContent =` "${praise}, ${name} 👋"`    
}

btn.addEventListener("click",function(){

greetUser("Hello there", "Aj")



})
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("message","I miss uQQ")
let message=localStorage.getItem("message")
console.log(message)


// // Create a function, add(), that adds two numbers together and returns the sum

// const add = (x,y) => {
//   return x+y;

// }


// console.log( add(3,4)    ) // should log 7
// console.log( add(9, 102) ) // should log 111

// // Create a function, getFirst(arr), that returns the first item in the array
// const getFirst=(arr)=>{

// return arr[0]


// }

// let card=getFirst([10,20,30])
// console.log(card)


// Call it with an array as an argument to verify that it works
