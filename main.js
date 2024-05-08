"use strict"


let intervalId; // Variable to hold interval ID
let stopButton = document.getElementById("myButton2");

function startChangeBackground() {
    intervalId = setInterval(changeBackGround, 100);
}

function stopChangeBackground() {
    let elem5 = document.getElementById(`elem5`)
    clearInterval(intervalId);
    elem5.style.background = `rgb(128, 128, 128)`;
    elem5.style.boxShadow = `2px 2px 5px white`;

}

stopButton.addEventListener("click", stopChangeBackground);

function changeBackGround() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let elem5 = document.getElementById('elem5');
    elem5.style.background = `rgb(${red},${green},${blue})`;
    elem5.style.boxShadow = `2px 2px 5px rgb(${red},${green},${blue})`;
    console.log(`${red},${green},${blue}`);
}
