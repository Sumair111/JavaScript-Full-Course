//When user click the purchase button, render out
//"Something went wrong, please try again" in the paragraph
// that has id = "error"

let commit= document.getElementById("error")
let Cr=document.getElementById("cr")
console.log(commit)
 function buy() {
     console.log("error")
     commit.textContent="Gareeboo"
     Cr.textContent= "Not Enough Credits"
  
 }
// buy()