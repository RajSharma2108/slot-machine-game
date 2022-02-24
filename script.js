let value1 = document.getElementById("value1")
let value2 = document.getElementById("value2")
let value3 = document.getElementById("value3")

let startBtn = document.getElementById("startBtn")
var count = 0;

let values = ["👀", "😎", "🎡","🎁","🚗","😛","💫"]


function getRandomnValue() {
    return values[Math.floor(Math.random() * values.length)]
}

function checkValues() {
    console.log(value2.innerText)
    if (value1.innerText == value2.innerText) {
        if (value2.innerText == value3.innerText)
            alert("You Won")
    }
    else {
        alert("You Lose")
    }
}

function valueChanger() {
    count += 1
    if (count >= 50) {
        clearInterval(animationId)
        checkValues()
        return
    }
    value1.innerText = getRandomnValue()
    value2.innerText = getRandomnValue()
    value3.innerText = getRandomnValue()

}

var animationId;

function updateAnimation() {
    if(animationId) clearInterval(animationId)
    animationId = setInterval(valueChanger, 1000 / "--speed")
}


function animationRunner(){
    count = 0;
    updateAnimation()
}

startBtn.addEventListener("click", animationRunner)

