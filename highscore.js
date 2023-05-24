

function showHighscores(){
    var allScores = localStorage.getItem("Highscores")
    if (allScores === null){
        return "";
    }
    var myOrderedList = document.createElement("ol")
    myOrderedList.setAttribute("id", "highscorelist")
    var mainHighscores = document.querySelector("main")
    var headerOne = document.querySelector("div")
    mainHighscores.insertBefore(myOrderedList, headerOne)
   
    var realAllScores =JSON.parse(allScores)
    for (var i =0; i<realAllScores.length; i++){
        
        var HighscoreList = document.createElement("li")
        HighscoreList.setAttribute("class","ScoreListEl")
        myOrderedList.appendChild(HighscoreList)
        HighscoreList.textContent = " " + realAllScores[i].Name + " - " + realAllScores[i].Score
    }
    var buttonClear = document.querySelector(".clearhighscores")
buttonClear.addEventListener("click", function(){
    myOrderedList.remove()
    localStorage.clear()
    myOrderedList.setAttribute("style", "background-color: white;")
})
}
   
showHighscores();

