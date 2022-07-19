let thingField = document.querySelector(".intro-field")

let button = document.querySelector("button")

button.onclick = function(){
    let thing = thingField.value
    let message = "believe you said " + thing
    console.log(message)
    document.write(message)  
}