var ultimateTime = 75

var endBySuccess = 0
var timeValue = document.getElementById("time")
timeValue.textContent = "Time : " + ultimateTime
window.addEventListener("load", function(){

  var timeInterval = setInterval(function(){
     ultimateTime--
    
     if (ultimateTime <0){
      timeValue.textContent = "Time : 0" 
      clearInterval(timeInterval)
           var removeOl = document.querySelector("ol")
     removeOl.remove()
     rightOrWrong.remove()
     h1Question.textContent = "All done!"
   
     var finalP = document.createElement("p")
    
     document.getElementById("Main-Quiz").appendChild(finalP)
    
     finalP.textContent = "Your final score is 0" 
     
      
      
     var form = document.createElement("form")
     var label = document.createElement("label")
     var input = document.createElement("input")
     var submitButton = document.createElement("button")
     var submitButtonAnchor = document.createElement("a")
     document.getElementById("Main-Quiz").appendChild(form)
      form.appendChild(label)
      form.appendChild(input)
      form.appendChild(submitButton)
      label.setAttribute("for", "Enter-Initials")
     input.setAttribute("id", "Enter-Initials")
     input.setAttribute("type", "text")
     submitButton.setAttribute("type", "button")
     submitButton.appendChild(submitButtonAnchor)
     submitButtonAnchor.setAttribute("id", "Submit-Button")
     submitButtonAnchor.textContent = "Submit"
     submitButtonAnchor.setAttribute("href", "highscore.html")
     label.textContent = "Enter Initials:"
     document.getElementById("Main-Quiz").appendChild(rightOrWrong)
      rightOrWrong.textContent = "Wrong!"
      var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }

          
        }, 1000)
        
        
   }
      
   else if (h1Question.textContent === "All done!"){
    clearInterval(timeInterval)
   }
   
   else if(ultimateTime >= 0){
        timeValue.textContent = "Time : " + ultimateTime
       
       }
      
       else if (h1Question.textContent === "All done!"){
        clearInterval(timeInterval)
       }
      
      }, 1000)
})




var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var orderedList = document.createElement("ol")
var h1Question = document.createElement("h1")
var rightOrWrong = document.createElement("span")
var button1 = document.createElement("button")
var button2 = document.createElement("button")
var button3 = document.createElement("button")
var button4 = document.createElement("button")


document.getElementById("Main-Quiz").appendChild(h1Question)
h1Question.textContent = "Commonly Used Data Types DO NOT Include:"


document.getElementById("Main-Quiz").appendChild(orderedList)
orderedList.appendChild(li1)
orderedList.appendChild(li2)
orderedList.appendChild(li3)
orderedList.appendChild(li4)


button1.textContent = "1. Strings"
button2.textContent = "2. Booleans"
button3.textContent = "3. Alerts"
button4.textContent = "4. Numbers"

button1.setAttribute("type", "button")
button2.setAttribute("type", "button")
button3.setAttribute("type", "button")
button4.setAttribute("type", "button")

button1.setAttribute("id", "question1")
button2.setAttribute("id", "question2")
button3.setAttribute("id", "question3")
button4.setAttribute("id", "question4")


li1.appendChild(button1)
li2.appendChild(button2)
li3.appendChild(button3)
li4.appendChild(button4)


document.getElementById("Main-Quiz").appendChild(rightOrWrong)
rightOrWrong.setAttribute("id", "rightorwrong")
rightOrWrong.textContent = "Wrong!"


document.createAttribute("data-Question")



var allButtons = document.querySelectorAll("button");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].setAttribute("data-Question", "1");
}

var x =

document.getElementById("Main-Quiz").addEventListener("click", function (event) {
    var element = event.target
    var question = element.getAttribute("data-Question")
   
    if (element.matches("#question3") && question == 1){
        button1.textContent = "1. Quotes"
        button2.textContent = "2. Curly Brackets"
        button3.textContent = "3. Parantheses"
        button4.textContent = "4. Square Brackets"
        h1Question.textContent = "The condition in an if/else statement is enclosed within __."
        rightOrWrong.textContent = "Right!"
       var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }


        }, 1000)
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].setAttribute("data-Question", "2");
          }
    }
    else if (element.matches("button") && question == 1){
      button1.textContent = "1. Quotes"
      button2.textContent = "2. Curly Brackets"
      button3.textContent = "3. Parantheses"
      button4.textContent = "4. Square Brackets"
      h1Question.textContent = "The condition in an if/else statement is enclosed within __."
      rightOrWrong.textContent = "Wrong!"
      ultimateTime = ultimateTime -10
      var rightOrWrongTime = 2
      var rightOrWrongAppearance = setInterval(function () {
        rightOrWrongTime--;
        if (rightOrWrongTime > 0){
          rightOrWrong.setAttribute("style", "visibility: visible")
        }
        else if (rightOrWrongTime ===0){
          clearInterval(rightOrWrongAppearance)
          rightOrWrong.setAttribute("style", "visibility: hidden")
        }


      }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].setAttribute("data-Question", "2");
        }
  }
 
   
   
   
   
   


  else if (element.matches("#question3") && question == 2){
    button1.textContent = "1. numbers and strings"
      button2.textContent = "2. other arrays"
      button3.textContent = "3. booleans"
      button4.textContent = "4. all of the above"
      h1Question.textContent = "Arrays in Javascript can be used to store __."
      rightOrWrong.textContent = "Right!"
      var rightOrWrongTime = 2
      var rightOrWrongAppearance = setInterval(function () {
        rightOrWrongTime--;
        if (rightOrWrongTime > 0){
          rightOrWrong.setAttribute("style", "visibility: visible")
        }
        else if (rightOrWrongTime ===0){
          clearInterval(rightOrWrongAppearance)
          rightOrWrong.setAttribute("style", "visibility: hidden")
        }


      }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].setAttribute("data-Question", "3");
        }
  }
 


   
    else if (element.matches("button") && question == 2){
      button1.textContent = "1. numbers and strings"
        button2.textContent = "2. other arrays"
        button3.textContent = "3. booleans"
        button4.textContent = "4. all of the above"
        h1Question.textContent = "Arrays in Javascript can be used to store __."
       rightOrWrong.textContent= "Wrong!"
       ultimateTime = ultimateTime -10
       var rightOrWrongTime = 2
       var rightOrWrongAppearance = setInterval(function () {
         rightOrWrongTime--;
         if (rightOrWrongTime > 0){
           rightOrWrong.setAttribute("style", "visibility: visible")
         }
         else if (rightOrWrongTime ===0){
           clearInterval(rightOrWrongAppearance)
           rightOrWrong.setAttribute("style", "visibility: hidden")
         }


       }, 1000) 
       for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].setAttribute("data-Question", "3");
          }
    }
   
   
   
   
    else if (element.matches("#question4") && question == 3){
      button1.textContent = "1. commas"
      button2.textContent = "2. curly brackets"
      button3.textContent = "3. quotes"
      button4.textContent = "4. paratheses"
      h1Question.textContent = "String values must be enclosed within __ when being assigned to variables."
     rightOrWrong.textContent= "Right!"
     var rightOrWrongTime = 2
     var rightOrWrongAppearance = setInterval(function () {
       rightOrWrongTime--;
       if (rightOrWrongTime > 0){
         rightOrWrong.setAttribute("style", "visibility: visible")
       }
       else if (rightOrWrongTime ===0){
         clearInterval(rightOrWrongAppearance)
         rightOrWrong.setAttribute("style", "visibility: hidden")
       }


     }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].setAttribute("data-Question", "4");
        }
  }
   
    else if (element.matches("button") && question == 3){
        button1.textContent = "1. commas"
        button2.textContent = "2. curly brackets"
        button3.textContent = "3. quotes"
        button4.textContent = "4. paratheses"
        h1Question.textContent = "String values must be enclosed within __ when being assigned to variables."
        rightOrWrong.textContent= "Wrong!"
        ultimateTime = ultimateTime -10
        var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }


        }, 1000)
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].setAttribute("data-Question", "4");
          }
    }
   
   
    else if (element.matches("#question3") && question == 4){
      button1.textContent = "1. Javascript"
      button2.textContent = "2. terminal/bash"
      button3.textContent = "3. for loops"
      button4.textContent = "4. console log"
      h1Question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
     rightOrWrong.textContent= "Right!"
     var rightOrWrongTime = 2
     var rightOrWrongAppearance = setInterval(function () {
       rightOrWrongTime--;
       if (rightOrWrongTime > 0){
         rightOrWrong.setAttribute("style", "visibility: visible")
       }
       else if (rightOrWrongTime ===0){
         clearInterval(rightOrWrongAppearance)
         rightOrWrong.setAttribute("style", "visibility: hidden")
       }


     }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].setAttribute("data-Question", "5");
        }
  }
  
   
    else if (element.matches("button") && question == 4){
        button1.textContent = "1. Javascript"
        button2.textContent = "2. terminal/bash"
        button3.textContent = "3. for loops"
        button4.textContent = "4. console log"
        h1Question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
        rightOrWrong.textContent= "Wrong!"
       
        ultimateTime = ultimateTime -10
        var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }


        }, 1000)
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].setAttribute("data-Question", "5");
          }
    }
    
    
    else if (element.matches("#question4") && question == 5){
      var removeOl = document.querySelector("ol")
      endBySuccess = endBySuccess + 25
      removeOl.remove()
      rightOrWrong.remove()
      h1Question.textContent = "All done!"
      
      var finalP = document.createElement("p")
     
      document.getElementById("Main-Quiz").appendChild(finalP)
     
      finalP.textContent = "Your final score is "  + ultimateTime
      
      
       
       
      var form = document.createElement("form")
      var label = document.createElement("label")
      var input = document.createElement("input")
      var submitButton = document.createElement("button")
      var submitButtonAnchor = document.createElement("a")
      document.getElementById("Main-Quiz").appendChild(form)
       form.appendChild(label)
       form.appendChild(input)
       form.appendChild(submitButton)
       label.setAttribute("for", "Enter-Initials")
      input.setAttribute("id", "Enter-Initials")
      input.setAttribute("type", "text")
      submitButton.setAttribute("type", "button")
      submitButton.appendChild(submitButtonAnchor)
      submitButtonAnchor.setAttribute("id", "Submit-Button")
      submitButtonAnchor.textContent = "Submit"
      submitButtonAnchor.setAttribute("href", "highscore.html")
     
      function setHighscore(){
        var Highscore = {
          Score : ultimateTime,
          Name: input.value
        }
        if (input.value !== "") {
          localStorage.setItem("highscore", JSON.stringify(Highscore))}
    
       }
      
      submitButtonAnchor.addEventListener("click",setHighscore)
      
     
      label.textContent = "Enter Initials:"
      document.getElementById("Main-Quiz").appendChild(rightOrWrong)
      rightOrWrong.textContent = "Right!"
      var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }


        }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
         allButtons[i].setAttribute("data-Question", "6");
       }
     }
     
    
    else if (element.matches("button") && question == 5){
      ultimateTime = ultimateTime - 10
      if (ultimateTime < 0){
        ultimateTime = 0
      }
      var removeOl = document.querySelector("ol")
     removeOl.remove()
     rightOrWrong.remove()
     h1Question.textContent = "All done!"
     
     var finalP = document.createElement("p")
    
     document.getElementById("Main-Quiz").appendChild(finalP)
    
     finalP.textContent = "Your final score is " + ultimateTime
     timeValue.textContent = "Time: " + ultimateTime
      
     var form = document.createElement("form")
     var label = document.createElement("label")
     var input = document.createElement("input")
     var submitButton = document.createElement("button")
     var submitButtonAnchor = document.createElement("a")
     document.getElementById("Main-Quiz").appendChild(form)
      form.appendChild(label)
      form.appendChild(input)
      form.appendChild(submitButton)
      label.setAttribute("for", "Enter-Initials")
     input.setAttribute("id", "Enter-Initials")
     input.setAttribute("type", "text")
     submitButton.setAttribute("type", "button")
     submitButton.appendChild(submitButtonAnchor)
     submitButtonAnchor.setAttribute("id", "Submit-Button")
     submitButtonAnchor.textContent = "Submit"
     submitButtonAnchor.setAttribute("href", "highscore.html")
     var z = 3;
     function setHighscore(){
      if (input.value !== ""){
       
      
      
      var Highscore = {
        Score : ultimateTime,
        Name: input.value
      }
    
        var Highscores = localStorage.getItem("Highscores")
      if (Highscores === null){
        Highscores = [Highscore]
          
        
      }
     else{
      Highscores = JSON.parse(Highscores)
      Highscores.push(Highscore)
      
     }
      localStorage.setItem("Highscores", JSON.stringify(Highscores))
       } }
    
    submitButtonAnchor.addEventListener("click",setHighscore)
  
     label.textContent = "Enter Initials:"
     document.getElementById("Main-Quiz").appendChild(rightOrWrong)
      rightOrWrong.textContent = "Wrong!"
      var rightOrWrongTime = 2
        var rightOrWrongAppearance = setInterval(function () {
          rightOrWrongTime--;
          if (rightOrWrongTime > 0){
            rightOrWrong.setAttribute("style", "visibility: visible")
          }
          else if (rightOrWrongTime ===0){
            clearInterval(rightOrWrongAppearance)
            rightOrWrong.setAttribute("style", "visibility: hidden")
          }
    

        }, 1000)
      for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute("data-Question", "6");
      }
    }
    
   
    
})




    
       