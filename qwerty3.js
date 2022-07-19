let thingField = document.querySelector(".thing-field")

let otherbutton = document.querySelector(".other-button")

let button = document.querySelector("button")

button.onclick = function(){
    let thing = thingField.value
    let message = "believe you said " + thing
    console.log(message)
    document.write(message)  
}
otherbutton.onclick = function(){
    let message2 = "it works"
    console.log(message2)
    document.write(message2)  
}