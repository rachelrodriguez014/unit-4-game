var target = Math.floor(Math.random() * 102 + 19)

$("#targetNumber").text(target);

var number1 = Math.floor(Math.random() * 12 + 1)
var number2 = Math.floor(Math.random() * 12 + 1)
var number3 = Math.floor(Math.random() * 12 + 1)
var number4 = Math.floor(Math.random() * 12 + 1)

var wins = 0
var losses = 0
var playerTotal = 0

$("#playerWins").text(wins)
$("#playerLosses").text(losses)


function reset() {
    target = Math.floor(Math.random() * 102 + 19);
    $("#targetNumber").text(target);
    number1 = Math.floor(Math.random() * 12 + 1);
    number2 = Math.floor(Math.random() * 12 + 1);
    number3 = Math.floor(Math.random() * 12 + 1);
    number4 = Math.floor(Math.random() * 12 + 1);
    playerTotal = 0;
    $("#playerScore").text(playerTotal);
}

function yay() {
    alert("YAY!!! You Won!!!");
    wins++;
    $("#playerWins").text(wins);
    reset();
}

function aww() {
    alert("AWWW!!! You Lost!!!");
    losses++;
    $("#playerLosses").text(losses);
    reset();
}

$("#blue").on("click", function(){
    playerTotal = playerTotal + number1;
    $("#playerScore").text(playerTotal);
    
    if (playerTotal === target){
        yay();
    }
    else if (playerTotal > target) {
        aww()
    }
})

$("#orange").on("click", function(){
    playerTotal = playerTotal + number2;
    $("#playerScore").text(playerTotal);
    
    if (playerTotal === target){
        yay();
    }
    else if (playerTotal > target) {
        aww()
    }
})

$("#purple").on("click", function() {
    playerTotal = playerTotal + number3;
    $("#playerScore").text(playerTotal);
    
    if (playerTotal === target){
        yay();
    }
    else if (playerTotal > target) {
        aww()
    }
})

$("#red").on("click", function() {
    playerTotal = playerTotal + number4;
    $("#playerScore").text(playerTotal);
    
    if (playerTotal === target){
        yay();
    }
    else if (playerTotal > target) {
        aww()
    }
})
