
var randomNumber1 = Math.floor(Math.random()*6)+1; // number 1-6

var randomDiceImage = "images/dice" + randomNumber1 +".png"; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random() *6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🥳 Player 1 WINS!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 WINS!🤩";
}
else document.querySelector("h1").innerHTML = "🤗 Draw!";
