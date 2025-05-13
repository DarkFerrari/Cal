const calculateButton = document.querySelector(".cal-button")
const inputElement = document.querySelector("#user-input")

//numerical buttons
const numButtons = document.querySelectorAll(".num-button")
numButtons.forEach(button => {
    button.addEventListener("click",()=> inputElement.value += button.dataset.value)
})

const operatorButtons = document.querySelectorAll(".operator-button")
operatorButtons.forEach( button => {
    button.addEventListener("click",()=>inputElement.value += button.dataset.value )
})

//operator buttons
const addButton = document.querySelector("#add-button")
addButton.addEventListener("click",()=> inputElement.value += "+")

const deleteButton = document.querySelector(".delete-button")
deleteButton.addEventListener("click",()=> inputElement.value = inputElement.value.slice(0,-1))


calculateButton.addEventListener("click",()=>{
    const input = inputElement.value
    result = identifyOperator(input)
    inputElement.value = result
})

const clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click",()=> inputElement.value=0)

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
