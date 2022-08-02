
let button1 = document.querySelector(".button-1")

let button2 = document.querySelector(".button-2")

let message = document.querySelector(".message")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

let blue_square = document.querySelector(".blue_square")

function set_position(x, y, element){
   element.style.left = x
   element.style.top = y
}

function move_position(x, y, element){
   element.style.left = parseInt(element.style.left) + x
   element.style.top = parseInt(element.style.top) + y
}

button1.onclick = function(){
    message.textContent = "you are red"
    console.log(message.textContent)
    button2.textContent = "DO NOT PRESS"
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
      }
   }
}

button2.onclick = function(){
   message.textContent = "you are blue"
   console.log(message.textContent)
   button1.textContent = "DO NOT PRESS"
   document.onkeydown = function(event){
      switch(event.key){
         case "t" :
              set_position(100, 100, blue_square)
         case "w" :
              move_position(0, -10, blue_square)
              break
         case "a" :
              move_position(-10, 0, blue_square)
              break
         case "s" :
              move_position(0, 10, blue_square)
              break
         case "d" :
              move_position(10, 0, blue_square)
              break
         case "x" :
              move_position(10, 10, blue_square)
              break
         case "e" :
              move_position(10, -10, blue_square)
              break
         case "z" :
              move_position(-10, 10, blue_square)
              break
         case "q" :
              move_position(-10, -10, blue_square)
              break
      }
   }
}