//grab the "change" element and store it into Change Variable
// let Change =document.getElementById("change")
let count=0
let Change = document.getElementById("change")
console.log(Change)
function increment(){
    count= count+1
    //set "change" inner text to count
    Change.innerText=count
}
