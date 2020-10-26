document.querySelector(".btn").addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var player1Name = "Player 1";
    var player2Name = "Player 2";
    var win = " Wins!";
    var draw = "Draw!";
    var winFlag = "🚩";
    var result = "";
    var player1Text = "";
    var player2Text = "";

    if (randomNumber1 < randomNumber2) {
        result = player2Name + win;
        player2Text = player2Name + winFlag;
        player1Text = player1Name;
    } else if (randomNumber1 > randomNumber2) {
        result = player1Name + win;
        player1Text = winFlag + player1Name;
        player2Text = player2Name;
    } else {
        result = draw;
        player1Text = player1Name;
        player2Text = player2Name;
    }

    document.querySelector("h1").innerHTML = result;
    document.querySelector(".p1").innerHTML = player1Text;
    document.querySelector(".p2").innerHTML = player2Text;
});