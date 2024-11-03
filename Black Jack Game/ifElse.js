//Check if the person is old enuogh to enter the nigthclub(21)
// Log a suitable message to console in both cases
 
var age =22

//if less than 21 --> "You Cant enter the club"
// else           -->  "Welcome"

if (age >=22){
    console.log("Welcome")
}
else{
    console.log("You can't enter the club")
}

//Check if the person is eligible for a birthday card for a king! (100)


var age =100

//if less than 100   --> "Not Eligible"
// else if exactly 100  --> "Here is your card!"
//else                 --> "Not Eligile, You have already gotten one"

if (age <100){
    console.log("Not Eligible")
}
else if (age ===100){
    console.log("Here is your card!")
}
else{
    console.log("Not Eligible, You have already gotten one")
}