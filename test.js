let btn=document.getElementById("btn")
let res=document.getElementById("result")
let first=document.getElementById("fname").value
let second=document.getElementById("lname").value
const show = () =>{
    let print=first + second;
    res.textContent=print;

}
btn.addEventListener("click",function(){

    show()
})