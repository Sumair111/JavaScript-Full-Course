let firstCard= 3
let secondCard= 5
let sum= firstCard+secondCard 
let hasBlack= false
let isAlive= true
//Declare a variable called message and assign its value to an empty string
let message= " "
// let message_El=document.getElementById("message-el")
// let Sum_el=document.getElementById("sum-el")
let Sum_el=document.querySelector("#sum-el")
let message_El=document.querySelector("#message-el")
let Cards_El=document.querySelector("#cards-el")
//let NewDraw=document.querySelector("#message-el")
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
        Sum_el.textContent= sum
        Cards_El.textContent= "Cards: " + firstCard +" "+secondCard

}
function newdraw(){
    console.log("Do you want to draw new cards")
    //Create a card variable, and hardcode its value to the number (2-11)
let thirdCard= 4
    //Add new card to sum variable
sum += thirdCard
    //Call startgame()
startGame()
}