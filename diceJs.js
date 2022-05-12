function diceRoll(position) {
    var formula = Math.round(Math.random() * 6 + 1);
    if (formula == 1) {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice1.png");
        return 1;
    } else if (formula == 2) {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice2.png");
        return 2
    } else if (formula == 3) {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice3.png");
        return 3
    } else if (formula == 4) {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice4.png");
        return 4
    } else if (formula == 5) {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice5.png");
        return 5
    } else {
        document.querySelectorAll("img")[position].setAttribute("src", "./images/dice6.png");
        return 6
    }
}

var first = diceRoll(0);
var second = diceRoll(1);

if (first > second) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
} else if (second > first) {
    document.querySelector("h1").innerHTML = "Player 2 Won🚩!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
