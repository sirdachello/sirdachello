"use strict"

let counter = 6;
let tries = 1;

function getRandomnumber(){
    return Math.floor(Math.random() * 6 + 1)
}
let goalNumber = getRandomnumber()

function inRange(number, start, end) {
    return number >= Math.min(start, end) && number <= Math.max(start, end);
}

function startGame() {
    alert(`Let's play a game, I think of a number, you guess it! You have ${counter} tries to do that! Click OK to play`)
}

function resetCounter(){
    counter = 6
    tries = 1;
    goalNumber = getRandomnumber()
}


function hotCold() {
    if (counter === 0) {
        alert("You ran out of tries, ggwp noob")
        resetCounter()
        startGame()
        hotCold()
    } else {
        if (counter < 6) {
            alert(`You are close, but not yet there, you have ${counter} tries left.`)
        }
        let guess = prompt(`Give me your best shot, what's my number?`);
        if (Number(guess) === goalNumber) {
            alert(`You won on your ${tries} try! Good job`)
            resetCounter()
            startGame()
            hotCold()
        } else {
            if ((inRange(Number(guess), goalNumber - 5, goalNumber + 5))) {
                tries++
                counter--
                hotCold()
            }
        }

    }
}

startGame()
hotCold()
