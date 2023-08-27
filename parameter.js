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