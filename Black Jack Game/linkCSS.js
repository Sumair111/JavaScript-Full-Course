let firstCard= 10
let secondCard= 7
let sum= firstCard+secondCard +4
let hasBlack= false
let isAlive= true
//Declare a variable called message and assign its value to an empty string
let message= " "
let message_El=document.getElementById("message-el")
let Sum_el=document.getElementById("sum-el")
//Re-assign the message variable to string we're logging out
function startGame() {
    if (sum <=20){
        message="Do you want to draw a new card 😀"
        }
    else if ( sum===21){
        message="You have got the Black Jack 😍"
        hasBlack=true 
        }
    else{
        message = "Your are out of the game 😞"
        isAlive=false
       
        }
        message_El.innerText=message
        Sum_el.textContenta= sum
}

console.log(isAlive)

// //log it out
console.log(message)