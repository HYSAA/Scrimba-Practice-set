
//1.first problem
let firstName= "Alberto"
let lastName= "Anunciado"
let fullName= firstName + " " + lastName;

console.log(fullName);

//2. Create a function that logs out "Hi there, Linda!" when called
let name = "Linda"
let greeting = "Hi there"


function hello(){

    console.log(greeting+","+" "+name+"!");

}
hello();

//.3 Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 3

function add3Points(){
myPoints+=3;


}
function remove1Point(){
myPoints-=1;
}
add3Points(); 
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) //2 and 2
console.log(11 + 7) //18
console.log(6 + "5") //6 5
console.log("My points: " + 5 + 9) //My Points: 5 9
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
//SCRIMBA VERSION 
let er1=document.getElementById("error")
console.log(er)
function error(){
    console.log("button clicked")
    er.textContent="Something went wrong, please try again!";
//  window.prompt("Something went wrong, please try again!");
  
}
//MY VERSION
let er=document.getElementById("error-btn")

function error(){
    window.prompt("Something went wrong,please try again!");
}

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let mySkills=[
    'Freelancer','College Student','Front End learner','Kitbashing'
]
console.log(mySkills)

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
console.log(experience[1])
console.log(experience[2])
console.log(experience[0])
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let myInfo=['Alberto Anunciado Jr', 18, "Like Pizza " +true];
console.log(myInfo)


let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
let newMessage = "Same here!"

messages.push(newMessage)
let pops=messages.pop();    
console.log(messages)


let nums=[1,3,6,3,4,10]

nums.filter( nums<2)
console.log(nums)