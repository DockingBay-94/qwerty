let thingField = document.querySelector(".thing-field")

let otherbutton = document.querySelector(".other-button")

let message1 = document.querySelector(".message1")

let message2 = document.querySelector(".message2")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

function set_position_red_square(x, y){
    red_square.style.left = x
    red_square.style.top = y
}

button.onclick = function(){
    let thingWord = thingField.value
    message1.textContent = "believe you said " + thingWord
    console.log(message1.textContent)
    
}

otherbutton.onclick = function(){
    message2.textContent = "it works"
    console.log(message2.textContent)
}

document.onkeydown = function(event){
    switch(event.key){
         case "q" :
            set_position_red_square(100, 100)
    }
}

// document.onkeydown() = function(){
//     red_square.style.left
// }