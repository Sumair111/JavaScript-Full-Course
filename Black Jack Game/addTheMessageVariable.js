let firstCard= 10
let secondCard= 7
let sum= firstCard+secondCard +5
let hasBlack= false
let isAlive= true
//Declare a variable called message and assign its value to an empty string
let message= " "
//Re-assign the message variable to string we're logging out
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
console.log(isAlive)

//log it out
console.log(message)