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


// Create a function, add(), that adds two numbers together and returns the sum

const add = (x,y) => {
  return x+y;

}


console.log( add(3,4)    ) // should log 7
console.log( add(9, 102) ) // should log 111

