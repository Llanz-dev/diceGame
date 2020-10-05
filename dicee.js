    // Capitalize
    function capitalizeFirstLetter(string) {
    let arr = string.split(' ');
    let cap = arr.map(i => {
       return i[0].toUpperCase() + i.slice(1).toLowerCase()
    });
    return cap.join(' ');
    }
    var firstPlayer = document.getElementById("playerOne").innerHTML = capitalizeFirstLetter(localStorage.getItem("player1", firstPlayer));
    var secondPlayer = document.getElementById("playerTwo").innerHTML = capitalizeFirstLetter(localStorage.getItem("player2", secondPlayer));
    firstPlayer = capitalizeFirstLetter(firstPlayer);
    secondPlayer = capitalizeFirstLetter(secondPlayer);

    // Reload Page
    function restart(){
        location.reload(true);
        localStorage.clear();
    }
    // Start function


    function start(){
        var i = 0;
        while(i < 10){
            document.getElementById("span").value = 0;

        }
        var number1 = Math.random() * 6 + 1;
        var numberRound1 = Math.floor(number1);
        var displayResult1 = "images/dice" + numberRound1 + ".png";
        var number2 = Math.random() * 6 + 1;
        var numberRound2 = Math.floor(number2);
        var displayResult2 = "images/dice" + numberRound2 + ".png";
        document.getElementById("img1").src = displayResult1;
        document.getElementById("img2").src = displayResult2;
        if(numberRound1 > numberRound2){
            document.querySelector("h1").innerHTML = firstPlayer + " Wins!"
        } else if (numberRound2 > numberRound1){
            document.querySelector("h1").innerHTML = secondPlayer + " Wins!"
        } else {
            document.querySelector("h1").innerHTML = "Draw!"
        }   
    }