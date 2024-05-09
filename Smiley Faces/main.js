"use strict"

function startChangeColor(){
    setInterval(changeColor, 600)
}

function changeColor(){
    let fontsize = Math.floor(Math.random()*25+25)
    let myElement = document.getElementById('myElement');
    myElement.style.fontSize = fontsize  + "px";
}