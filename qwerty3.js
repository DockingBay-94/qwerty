let thingField = document.querySelector(".thing-field")

let otherbutton = document.querySelector(".other-button")

let button = document.querySelector("button")

button.onclick = function(){
    let thingWord = thingField.value
    let message = "believe you said " + thingWord
    console.log(message)
}
otherbutton.onclick = function(){
    let message2 = "it works"
    console.log(message2)
}