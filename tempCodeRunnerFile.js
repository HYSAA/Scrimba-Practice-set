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