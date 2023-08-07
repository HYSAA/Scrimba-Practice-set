let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
largeCountries.push("China")
largeCountries.push("Pakistan")
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
for(let i=0;i<largeCountries.length;i++){

    largeCountries.pop()
   
    console.log(largeCountries[i])
}
