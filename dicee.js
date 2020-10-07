
    let playerOne = 0;
    document.getElementById("oneScore").innerHTML =  "10/" + playerOne;
    let playerTwo = 0;
    document.getElementById("twoScore").innerHTML = "10/" + playerTwo;
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
    function clearFun(){
        location.reload(true);
        localStorage.clear();
    }

    // Reload Page
    function restartFun(){
        location.reload(true);
    }
    // Start function
    if(typeof firstPlayer === 'undefined' && typeof secondPlayer === 'undefined') {
        const startBtn = document.getElementsByClassName("startBtn")[0];
        startBtn.disabled = true;
    } else { 
    function startFun(){    
        var number1 = Math.random() * 6 + 1;
        var numberRound1 = Math.floor(number1);
        var displayResult1 = "images/dice" + numberRound1 + ".png";
        var number2 = Math.random() * 6 + 1;
        var numberRound2 = Math.floor(number2);
        var displayResult2 = "images/dice" + numberRound2 + ".png";
        document.getElementById("img1").src = displayResult1;
        document.getElementById("img2").src = displayResult2;
        document.querySelector("h1").innerHTML = firstPlayer + " Wins!";
        if(numberRound1 > numberRound2){
            document.querySelector("h1").innerHTML = firstPlayer + " Wins!";
            let displayOne = playerOne+=1;
            document.getElementById("oneScore").innerHTML = "10/" + displayOne;
            if(displayOne === 10){
                document.querySelector("h1").innerHTML = firstPlayer + " Champion!";
                const startBtn = document.getElementsByClassName("startBtn")[0];
                startBtn.disabled = true;
            }
        } else if (numberRound2 > numberRound1){
            document.querySelector("h1").innerHTML = secondPlayer + " Wins!";
            let displayTwo = playerTwo+=1;
            document.getElementById("twoScore").innerHTML = "10/" + displayTwo;
            if(displayTwo === 10){
                document.querySelector("h1").innerHTML = secondPlayer + " Champion!";
                const startBtn = document.getElementsByClassName("startBtn")[0];
                startBtn.disabled = true;
            }
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }   

    }
}