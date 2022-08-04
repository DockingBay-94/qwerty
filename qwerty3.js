
let button1 = document.querySelector(".button-1")

let button2 = document.querySelector(".button-2")

let button3 = document.querySelector(".button-3")

let message = document.querySelector(".message")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

let blue_square = document.querySelector(".blue_square")

let green_square = document.querySelector(".green_square")

function set_position(x, y, element){
   element.style.left = x
   element.style.top = y
}
function send_position(element){
   let elementName
      if (element == red_square){
         elementName = "red_square"
      }else if(element == blue_square){
         elementName = "blue_square"
      }else if(element == green_square){
         elementName = "green_square"
      }
   holler.appInstance.notifyClients(JSON.stringify({
      Y: parseInt(element.style.top),
      X: parseInt(element.style.left),
      EString: elementName
   }))
}
// function teleport_red(x, y){
//    red_square.style.top = y
//    red_square.style.left = x
//    send_position(red_square)
// }

function move_position(x, y, element){
   element.style.left = parseInt(element.style.left) + x
   element.style.top = parseInt(element.style.top) + y
   send_position(element)
}

function choose_and_controll_square(used_button, unused_buttonA, unused_buttonB, color_message, square){
   used_button.onclick = function(){
      message.textContent = color_message
      console.log(message.textContent)
      unused_buttonA.textContent = "DO NOT PRESS"
      unused_buttonB.textContent = "DO NOT PRESS"
      document.onkeydown = function(event){
         switch(event.key){
            case "t" :
               set_position(100, 100, square)
               break
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
               break
            case "n" :
               teleport_red(600, 600)
               break
            case "m" :
               teleport_red(50, 50)
               break
         }
      }
   }
}



holler.onLoad(()=>{
   holler.me((user)=>{ 
      choose_and_controll_square(button1, button2, button3, "you are red", red_square)
      choose_and_controll_square(button2, button1, button3, "you are blue", blue_square)
      choose_and_controll_square(button3, button1, button2, "you are green", green_square)
   })   
   holler.onClientEvent(event=>{ 
      console.log(event)
      console.log(JSON.parse(event))
      let incomingData = JSON.parse(event)
      if(incomingData.EString == "red_square"){
         set_position(incomingData.X, incomingData.Y, red_square) 
      }else if(incomingData.EString == "blue_square"){
         set_position(incomingData.X, incomingData.Y, blue_square)
      }else if(incomingData.EString == "green_square"){
         set_position(incomingData.X, incomingData.Y, green_square)
      }
   })   
})