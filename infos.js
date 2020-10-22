const imageOne = document.getElementById("playerOneIMG");
const imageTwo = document.getElementById("playerTwoIMG");
const inputFile1 = document.getElementById("inputFile1");
const inputFile2 = document.getElementById("inputFile2");
const previewText1 = document.querySelector("span");

inputFile1.addEventListener("change", function(){
    file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function(){
        imageOne.style.display = "block";
        imageOne.setAttribute("src", this.result);
        document.querySelector(".previewText1").style.display = "none";
        localStorage.setItem("firstImageData", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});
inputFile2.addEventListener("change", function(){
    file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function(){
        imageTwo.style.display = "block";
        imageTwo.setAttribute("src", this.result);
        document.querySelector(".previewText2").style.display = "none";
        localStorage.setItem("firstImageData", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

const btnContainer = document.querySelector(".button-container");
const btnSubmit = btnContainer.querySelector("input");
btnSubmit.addEventListener("click", function(){ 
    playersName();
});
function playersName(){
    var firstPlayer = document.getElementById("playerOne").value;
    var secondPlayer = document.getElementById("playerTwo").value;
    localStorage.setItem("player1", firstPlayer);
    localStorage.setItem("player2", secondPlayer);
    return false;
}