
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


// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
let newMessage = "Same here!"

messages.push(newMessage)
let pops=messages.pop();    
console.log(messages)


let nums=[1,3,6,3,4,10]

nums.filter( nums<2)
console.log(nums)

//FOR LOOPS PRACTICE
// let count=1;
// // count++;
// count+=1;

// console.log(count)
let i=5;
for(let count=1;count < 5; count++){
console.log(count)
}
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (let count=10;count<110;count+=10){
console.log(count)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "ASDASDASDASDASD",
    "ASDASDASDDDDDDDDDDDDDDDDD"
]
for(let i =0 ; i <messages.length;i+=1){
console.log(messages[i])

}
let j=0;
let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
 for(j=0;j<cards.length;j++){
    console.log(cards[j]);
 }



let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")
for(let i=0;i<sentence.length;i+=1)
{
greetingEl.textContent=sentence[i];
}
  
function show(){
let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")
for(let i=0;i<sentence.length;i+=1)
{
greetingEl.textContent+=sentence[i];

}
}

let playerone=102;
let playertwo=103;

function getFast(){
if(playerone<playertwo){
    return playerone;
    console.log("player one wins")
}else if(playerone>playertwo){ 
    return playertwo;
console.log("player two wins");
}
}
getFast()