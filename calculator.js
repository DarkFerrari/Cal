const calculateButton = document.querySelector(".cal-button")
calculateButton.addEventListener("click",()=>{
    const inputElement = document.querySelector("#user-input")
    const input = inputElement.value
    result = identifyOperator(input)
    inputElement.value = result
})

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
