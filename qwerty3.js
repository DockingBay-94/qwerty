
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
function set_position_red(y, x){
   red_square.style.top = y
   red_square.style.left = x
}

function move_position(x, y, element){
   element.style.left = parseInt(element.style.left) + x
   element.style.top = parseInt(element.style.top) + y
}

function choose_and_controll_square(used_button, unused_button, color_message, square){
   used_button.onclick = function(){
      message.textContent = color_message
      console.log(message.textContent)
      unused_button.textContent = "DO NOT PRESS"
      document.onkeydown = function(event){
      switch(event.key){
        case "t" :
           set_position(100, 100, square)
        case "w" :
           move_position(0, -10, square)
           break
        case "a" :
           move_position(-10, 0, square)
           break
        case "s" :
           move_position(0, 10, square)
           break
        case "d" :
           move_position(10, 0, square)
           break
        case "x" :
           move_position(10, 10, square)
           break
        case "e" :
           move_position(10, -10, square)
           break
        case "z" :
           move_position(-10, 10, square)
           break
        case "q" :
           move_position(-10, -10, square)
           break
        case "l" :
           set_position(1, 1, square)
         }
      }
   }
}



holler.onLoad(()=>{
   holler.me((user)=>{ 
      choose_and_controll_square(button1, button2, "you are red", red_square)
   })   

   holler.onClientEvent(event=>{ 
      console.log(event)
      console.log(JSON.parse(event))
      let incomingArray = JSON.parse(event)
      set_position_red(incomingArray[0],incomingArray[1])
   })
   const sendRedSquareLeftAndTop = ()=>{
      console.log("about to send data")
      holler.appInstance.notifyClients(JSON.stringify([
         parseInt(red_square.style.top),
         parseInt(red_square.style.left)
      ]))
      setTimeout(sendRedSquareLeftAndTop, 100)
   }
   sendRedSquareLeftAndTop()
})

choose_and_controll_square(button2, button1, "you are blue", blue_square)