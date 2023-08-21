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
