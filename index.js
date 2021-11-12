function dados() {
    var randomNumber1 = Math.floor((Math.random()*6)+1);
if (randomNumber1 === 1) {
    document.querySelector("img").setAttribute("src", "images/dice1.png");
}if (randomNumber1 === 2) {
    document.querySelector("img").setAttribute("src", "images/dice2.png");
}if (randomNumber1 === 3) {
    document.querySelector("img").setAttribute("src", "images/dice3.png");
}if (randomNumber1 === 4) {
    document.querySelector("img").setAttribute("src", "images/dice4.png");
}if (randomNumber1 === 5) {
    document.querySelector("img").setAttribute("src", "images/dice5.png");
}if (randomNumber1 === 6) {
    document.querySelector("img").setAttribute("src", "images/dice6.png");
}
var randomNumber2 = Math.floor((Math.random()*6)+1);
if (randomNumber2 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}if (randomNumber2 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}if (randomNumber2 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}if (randomNumber2 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}if (randomNumber2 === 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}if (randomNumber2 === 6) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Gano Alfredo";
}if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Gano Salvatore";
}if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Empate";
} 
}

/*
function dados() {
    var randomNumber1 = Math.floor((Math.random()*6)+1);
    document.querySelectorAll("img").setAttribute("src", "images/dice" + randomNumber1 + ".png")
    var randomNumber2 = Math.floor((Math.random()*6)+1);
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png")
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Gano Alfredo";
}if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Gano Salvatore";
}if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Empate";
} 
}
*/
