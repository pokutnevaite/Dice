document.querySelector(".btn").addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelector(".p2").innerHTML = "Player 2🚩"; 
        document.querySelector(".p1").innerHTML = "Player 1";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        document.querySelector(".p1").innerHTML = "🚩Player 1";
        document.querySelector(".p2").innerHTML = "Player 2";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelector(".p1").innerHTML = "Player 1";
        document.querySelector(".p2").innerHTML = "Player 2";
    }
});