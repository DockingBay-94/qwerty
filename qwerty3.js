let input1 = document.querySelector(".input1")

let button1 = document.querySelector(".button-1")

let button2 = document.querySelector(".button-2")

let message1 = document.querySelector(".message1")

let message2 = document.querySelector(".message2")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

function set_position_red_square(x, y){
    red_square.style.left = x
    red_square.style.top = y
}
function move_position_red_square(x, y){
    red_square.style.left = parseInt(red_square.style.left) + x
    red_square.style.top = parseInt(red_square.style.top) + y
}

button1.onclick = function(){
    let thingWord = input1.value
    message1.textContent = "believe you said " + thingWord
    console.log(message1.textContent)
}

button2.onclick = function(){
    message2.textContent = "it works"
    console.log(message2.textContent)
}

document.onkeydown = function(event){
    switch(event.key){
         case "t" :
            set_position_red_square(100, 100)
         case "w" :
            move_position_red_square(0, -10)
            break
         case "a" :
            move_position_red_square(-10, 0)
            break
         case "s" :
            move_position_red_square(0, 10)
            break
         case "d" :
            move_position_red_square(10, 0)
            break
         case "x" :
            move_position_red_square(10, 10)
            break
         case "e" :
            move_position_red_square(10, -10)
            break
         case "z" :
            move_position_red_square(-10, 10)
            break
         case "q" :
            move_position_red_square(-10, -10)
            break
    }
}