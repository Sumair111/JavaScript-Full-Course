//Initialize the count as 0
//liston for the clicks on incremental button
//increment the count variable when button is clicked
//change the "change" in html to reflect the new count

let count =0
let Change= document.getElementById("change")
function increment(){
    console.log("Clicked")
    count= count + 1;
    console.log(Change)
    Change.innerText=count
    // document.getElementById("change").innerText = count;
}

