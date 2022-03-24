


// var randomNumber1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png", "images/dice5.png", "images/dice6.png"];
//  randomNumber1 = randomNumber1[Math.floor(Math.random()*randomNumber1.length)];
//
// var randomNumber2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png", "images/dice5.png", "images/dice6.png"];
//   randomNumber2 = randomNumber2[Math.floor(Math.random()*randomNumber2.length)];
// alert("working");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randImg1 = "images/dice" + randomNumber1 + ".png";
//
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randImg2 = "images/dice" + randomNumber2 + ".png";
//
document.querySelectorAll("img")[0].setAttribute("src", randImg1);
//
document.querySelectorAll("img")[1].setAttribute("src", randImg2);
//
//
    if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    }
    else if(randomNumber1 < randomNumber2){
      document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }
//
     else {
     document.querySelector("h1").innerHTML = "Draw";
}


// if(randomNumber1.length >randomNumber2.length){
//   document.querySelector("h1").innerHTML = "Player 1 Wins";
// }
// else(randomNumber2.length >randomNumber1.length){
//   document.querySelector("h1").innerHTML = "Player 2 Wins";
// }
