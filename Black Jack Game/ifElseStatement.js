let firstCard= 10
let secondCard= 7
let sum= firstCard+secondCard +5
let hasBlack= false
let isAlive= true

//Write the conditional according to rules


//if less than or equal to 20 --> "Do you want to draw a new card 😀"
// else if exactly --> "Wohoo!  You have got Black Jack 😍"
// else --> "Your are out of the game 😞"


if (sum <=20){
console.log("Do you want to draw a new card 😀")
}
else if ( sum===21){
    console.log("You have got the Black Jack 😍")
    hasBlack=true
}

else{
    console.log("Your are out of the game 😞")
    isAlive=false
}
console.log(isAlive)