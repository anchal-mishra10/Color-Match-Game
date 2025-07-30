let gameSequence = [];
let userSequence = [];

let btns = ["pink", "orange", "green", "blue"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game Started");
        start = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = "Level " + level;
    let randomIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randomIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    btnFlash(randBtn);

}

function btnPress() {
    console.log("btn was Pressed");
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    checkAns(userSequence.length - 1);

}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (gameSequence[idx] === userSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() {
    start = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}

