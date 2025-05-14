const calculateButton = document.querySelector(".cal-button")
const inputElement = document.querySelector("#user-input")
let operators = ["+","-","%","/","*"]
let shouldClear=false;

//numerical buttons
const numButtons = document.querySelectorAll(".num-button")
numButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if(shouldClear){
            inputElement.value=""
            shouldClear=false
        }
        if(button.dataset.value=="."){
            const currentValue = inputElement.value.split(/[\+\-\*\/%]/).pop()
            if(!currentValue.includes("."))
            {
                inputElement.value += ".";
            }
        }
        else inputElement.value += button.dataset.value})
})

//operator buttons
const operatorButtons = document.querySelectorAll(".operator-button")
operatorButtons.forEach( button => {
    button.addEventListener("click",()=>{
        if(shouldClear)
        {
            shouldClear=false
        }
        if(!(/[+\-*/%]/).test(inputElement.value.slice(-1)))
        {
            inputElement.value += button.dataset.value
        }
    })
})

//delete button
const deleteButton = document.querySelector(".delete-button")
deleteButton.addEventListener("click",()=> inputElement.value = inputElement.value.slice(0,-1))

//Calculate button
// add both "=" and "calculate" for this function
calculateButton.addEventListener("click",()=>{
    const input = inputElement.value
    let result = identifyOperator(input)
    console.log(result)
    try{
        if(result==Infinity) inputElement.value = "Error - no divisions by 0 please"
        else if (Number.isInteger(result)) inputElement.value = (result)
        else inputElement.value = (result).toFixed(4)
    }
    catch (Error){ inputElement.value = "invalid input"}
    //else inputElement.value = "Error"
    shouldClear = true;
})

inputElement.addEventListener("keydown",(event)=> {
    if(event.key=="Enter"){
        calculateButton.click();
    }
})

const clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click",()=> inputElement.value="")


function identifyOperator(input){
    for(element of input){
        
        if(operators.includes(element)) 
        {
            let [a,b] = input.split(element)
            a=parseFloat(a)
            console.log(a)
            b=parseFloat(b)
            console.log(b)
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
