
let button1 = document.querySelector(".button-1")

let button2 = document.querySelector(".button-2")

let button3 = document.querySelector(".button-3")

let leftButton = document.querySelector(".left-button")

let upButton = document.querySelector(".up-button")

let downButton = document.querySelector(".down-button")

let rightButton = document.querySelector(".right-button")

let message = document.querySelector(".message")

let button = document.querySelector("button")

let red_square = document.querySelector(".red_square")

let blue_square = document.querySelector(".blue_square")

let green_square = document.querySelector(".green_square")

let that_choose_thing = document.querySelector(".that_choose_thing")

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
function teleport(x, y, element){
   element.style.left = x
   element.style.top = y
   send_position(element)
}

function move_position(x, y, element){
   element.style.left = parseInt(element.style.left) + x
   element.style.top = parseInt(element.style.top) + y
   send_position(element)
}

function choose_and_controll_square(used_button, color_message, square){
   used_button.onclick = function(){
      message.textContent = color_message
      console.log(message.textContent)
      button1.remove()
      button2.remove()
      button3.remove()
      that_choose_thing.textContent =""
      leftButton.textContent = "left"
      upButton.textContent = "up"
      downButton.textContent = "down"
      rightButton.textContent = "right"

      let mouseState = ("up")

      let squareVelocity = (x, y)=>{
         move_position(x, y, square)
         if (mouseState == "down"){
            setTimeout(()=>{squareVelocity(x, y)}, 100)
         }
      }

      leftButton.onmousedown = ()=>{
         mouseState = "down"
         squareVelocity(-10, 0)
      }
      upButton.onmousedown = ()=>{
         mouseState = "down"
         squareVelocity(0, -10)
      }
      downButton.onmousedown = ()=>{
         mouseState = "down"
         squareVelocity(0, 10)
      }
      rightButton.onmousedown = ()=>{
         mouseState = "down"
         squareVelocity(10, 0)
      }

      leftButton.onmouseup = ()=>{
         mouseState = "up"
         squareVelocity(0, 0)
      }
      upButton.onmouseup = ()=>{
         mouseState = "up"
         squareVelocity(0, 0)
      }
      downButton.onmouseup = ()=>{
         mouseState = "up"
         squareVelocity(0, 0)
      }
      rightButton.onmouseup = ()=>{
         mouseState = "up"
         squareVelocity(0, 0)
      }

      document.onkeydown = function(event){
         switch(event.key){
            case "t" :
               teleport(100, 100, square)
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
               teleport(1, 1, square)
               break
            case "1" :
               teleport(400, 300, square)
               break
            case "2" :
               teleport(400, 440, square)
               break
            case "3" :
               teleport(400, 580, square)
               break
         }
      }
   }
}



holler.onLoad(()=>{
   holler.me((user)=>{ 
      choose_and_controll_square(button1, "you are red", red_square)
      choose_and_controll_square(button2, "you are blue", blue_square)
      choose_and_controll_square(button3, "you are green", green_square)
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