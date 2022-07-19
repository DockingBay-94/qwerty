let thingField = document.querySelector(".thing-field")

let button = document.querySelector("button")

button.onclick = function(){
    let thing = thingField.value
    let message = "believe you said " + thing
    console.log(message)
    document.write(message)  
}
button2.onclick = function(){
    let message = "it works"
    console.log(message)
    document.write(message)  
}