
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
}else if(playertwo<playerone){ 
    return playertwo;
console.log("player two wins");
}else{
    return playerone
}
}
let result=getFast()
console.log(result)

let x=3
let y=4
function ret(x,y){
    return x+y
    
}

console.log(ret())

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
let first=4;
let second=5;
function totalTime(){
return first+second        

}
let ya=totalTime()
console.log(totalTime())

let randomNumber = Math.floor( Math.random() * 30 ) + 1

// console.log(randomNumber)

for(let k=0;k<randomNumber;k++)
{
    console.log(randomNumber)
}


function rollDice(){
let dice=Math.floor(Math.random()*6)+1
return dice;
}
console.log(rollDice())
rollDice()

let getCertificate=true;
let passedCourse=true;
 
function generateCertificate(){
if(getCertificate==true&&passedCourse==true)
{
    console.log("generating certificate")
}else{
    console.log("you failed lmao")
}
}
generateCertificate()

let hasSolvedChallenge=false;
let hasHintsLeft=false;
// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
function checkPlayer(){

    if (hasHintsLeft==false&&hasSolvedChallenge==false){
        showSolution();
    }
}


function showSolution(){
 console.log("showing solutions")

}
checkPlayer()
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likeDocumentaries=false;
let likeStartups=true;

function guestUser(){
    if(likeDocumentaries==true||likeStartups==true)
    renderMovie()
else{
renderWrong()
}
}
function renderWrong(){
    console.log("ok nothing")
}
function renderMovie(){
console.log("Hey,check out this film")

}
guestUser()

let myLife={
   
  name:"Aj",
  age:22,
  birthday:"January",
  isCute:true,
  skills:["cooking","cleaning"]
}
console.log(myLife.skills[1])

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
const airbnb={

    hasCr:false,
    location:'New York',
    rooms:["master's bedroom","kitchen","Sala"],
    bldgDate:1989
}
console.log(airbnb.bldgDate)
console.log(airbnb.hasCr)
console.log(airbnb.location)
console.log(airbnb.rooms)

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person={
    name:"Aj",
    age:22,
    country:"Philippines",

}

function logData(){
    console.log(person.name+" is "+ person.age+" years old and lives in "+ person.country)
}
logData();

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variablew
let human=Math.floor(Math.random() *66)+1;
// > greater than
// < less than 
console.log(human)
function checkAge(){
  if(human < 6){
     console.log("free")
  }else if(human >= 6 && human<= 17){
    console.log("child discount")
  }else if(human>=18 && human <=26){
    console.log("Student discount")
  }else if(human >=27 && human <=66){
    console.log("full price")
  }else{
    console.log("senior citizen discount")
  }
}
checkAge();
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
function getLargest(){
for(let i=0; i < largeCountries.length;i++){
console.log("-" + largeCountries[i])
}
}
getLargest()
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries)

for(let i=0;i<largeCountries.length;i++){
    largeCountries.pop()
    console.log(largeCountries[i])
}
let weekday={
   date: "Friday",datee:13
}
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if(weekday.date=="Friday" && weekday.datee==13){
    console.log("😱")
}

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


// template strings/literals

const recipient = "James"
const sender="aj"
// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
//template strings
const email=`Hey 
${recipient}! 
How is it going? 
Cheers,${sender}`

console.log(email)

