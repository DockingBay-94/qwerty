let input1 = document.querySelector(".input1")

let button1 = document.querySelector(".button-1")

let button2 = document.querySelector(".button-2")

let message1 = document.querySelector(".message1")

let message2 = document.querySelector(".message2")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

let blue_square = document.querySelector(".blue_square")

button1.onclick = function(){
    let thingWord = input1.value
    message1.textContent = "believe you said " + thingWord
    console.log(message1.textContent)
}

button2.onclick = function(){
    message2.textContent = "it works"
    console.log(message2.textContent)
}

function set_position(x, y, element){
    element.style.left = x
    element.style.top = y
}

function move_position(x, y, element){
    element.style.left = parseInt(element.style.left) + x
    element.style.top = parseInt(element.style.top) + y
}


document.onkeydown = function(event){
    switch(event.key){
         case "t" :
            set_position(100, 100, red_square)
         case "w" :
            move_position(0, -10, red_square)
            break
         case "a" :
            move_position(-10, 0, red_square)
            break
         case "s" :
            move_position(0, 10, red_square)
            break
         case "d" :
            move_position(10, 0, red_square)
            break
         case "x" :
            move_position(10, 10, red_square)
            break
         case "e" :
            move_position(10, -10, red_square)
            break
         case "z" :
            move_position(-10, 10, red_square)
            break
         case "q" :
            move_position(-10, -10, red_square)
            break



         case "p" :
            set_position(100, 100, blue_square)
         case "u" :
            move_position(0, -10, blue_square)
            break
         case "h" :
            move_position(-10, 0, blue_square)
            break
         case "j" :
            move_position(0, 10, blue_square)
            break
         case "k" :
            move_position(10, 0, blue_square)
            break
         case "m" :
            move_position(10, 10, blue_square)
            break
         case "i" :
            move_position(10, -10, blue_square)
            break
         case "n" :
            move_position(-10, 10, blue_square)
            break
         case "y" :
            move_position(-10, -10, blue_square)
            break
    }
}