let thingField = document.querySelector(".thing-field")

let otherbutton = document.querySelector(".other-button")

let message1 = document.querySelector(".message1")

let message2 = document.querySelector(".message2")

let button = document.querySelector("button")

button.onclick = function(){
    let thingWord = thingField.value
    message1.textContent = "believe you said " + thingWord

    console.log(message1.textContent)
}
otherbutton.onclick = function(){
    message2.textContent = "it works"

    console.log(message2.textContent)
}