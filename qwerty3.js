let thingField = document.querySelector(".thing-field")

let otherbutton = document.querySelector(".other-button")

let dev1 = document.querySelector("dev1")

let dev2 = document.querySelector("dev2")

let button = document.querySelector("button")

button.onclick = function(){
    let thingWord = thingField.value
    dev1.textContent = "believe you said " + thingWord

    console.log(div.textContent)
}
otherbutton.onclick = function(){
    dev2.textContent = "it works"

    console.log(div1.textContent)
}