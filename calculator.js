const calculateButton = document.querySelector(".cal-button")
calculateButton.addEventListener("click",()=>{
    const inputElement = document.querySelector("#user-input")
    const input = inputElement.value
    result = identifyOperator(input)
    console.log(result)
    inputElement.value = result
})

function identifyOperator(input){
    //input = Array.from(input)
    result=0
    for(element of input){
        
        if(element===("+")) 
            {
            let [a,b] = input.split(element)
            result = parseInt(a) + parseInt(b)
            }
    }
    return result
}
