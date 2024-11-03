let num1=8
let num2= 10
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
console.log(num1)
let Sum_el = document.getElementById("sum-el")
let Function=document.getElementById("function")

//Create 4 functions add(), subtract() , divide() and multiply()
//perform calculation using num1 and num2
// render the result in paragraph with id "sum-el"

function add(){
    Function.textContent="Sum"
     Sum_el.textContent= num1+num2
     

     
}
function subtract(){
    Function.textContent="Subtract"
    Sum_el.textContent= num1-num2

    
}
function multiply(){
Function.textContent="Multiply"
    Sum_el.textContent= num1*num2

    
}
function divide(){
    Function.textContent="Divide"
    Sum_el.textContent= num1/num2

    
}


