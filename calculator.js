const calculateButton = document.querySelector(".cal-button")
const inputElement = document.querySelector("#user-input")
let shouldClear=false;

//numerical buttons
const numButtons = document.querySelectorAll(".num-button")
numButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if(shouldClear){
            inputElement.value=""
            shouldClear=false
        }
        inputElement.value += button.dataset.value})
})

//operator buttons
const operatorButtons = document.querySelectorAll(".operator-button")
operatorButtons.forEach( button => {
    button.addEventListener("click",()=>{
        if(shouldClear){
            shouldClear=false
        }
        inputElement.value += button.dataset.value
    })
})

//delete button
const deleteButton = document.querySelector(".delete-button")
deleteButton.addEventListener("click",()=> inputElement.value = inputElement.value.slice(0,-1))

//Calculate button
calculateButton.addEventListener("click",()=>{
    const input = inputElement.value
    result = identifyOperator(input)
    if(result==Infinity) inputElement.value = "Error - no divisions by 0 please"
    else if (Number.isInteger(result)) inputElement.value = (result)
    else if (!Number.isInteger) inputElement.value = (result).toFixed(4)
    else inputElement.value = "Error"
    shouldClear = true;
})

const clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click",()=> inputElement.value="")


function identifyOperator(input){
    let operators = ["+","-","%","/","*"]
    for(element of input){
        
        if(operators.includes(element)) 
        {
            let [a,b] = input.split(element)
            a=parseFloat(a)
            b=parseFloat(b)
            switch(element)
            {
                case "+": return a+b;
                case "-": return a-b;
                case "/": return a/b;
                case "*": return a*b;
                case "%": return a%b;
            }
        }
    }
    return "invalid input"

}
