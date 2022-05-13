function randomImage(position){
    formula = Math.ceil(Math.random() * 6);
    var myImage = "images/dice" + formula + ".png";
    document.querySelectorAll("img")[position].setAttribute("src", myImage)
    return formula;
}

var firstImage  = randomImage(0);
var secondImage = randomImage(1);

if (firstImage > secondImage) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
} else if (secondImage > firstImage) {
    document.querySelector("h1").innerHTML = "Player 2 Won🚩!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
