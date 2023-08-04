
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