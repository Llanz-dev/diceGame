    function restart(){
        location.reload(true);
    }
    function start(){
        var number1 = Math.random() * 6 + 1;
        var numberRound1 = Math.floor(number1);
        var displayResult1 = "images/dice" + numberRound1 + ".png";
        
        var number2 = Math.random() * 6 + 1;
        var numberRound2 = Math.floor(number2);
        var displayResult2 = "images/dice" + numberRound2 + ".png";

        document.getElementById("img1").src = displayResult1;
        document.getElementById("img2").src = displayResult2;

        if(numberRound1 > numberRound2){
            document.querySelector("h1").innerHTML = "Player 1 Wins!"
        } else if (numberRound2 > numberRound1){
            document.querySelector("h1").innerHTML = "Player 2 Wins!"
        } else {
            document.querySelector("h1").innerHTML = "Draw!"
        }   
    }