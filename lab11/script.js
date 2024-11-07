
function WinnerMessage() {
    document.getElementById("message").innerHTML = "You Won!"; 
}


function TryAgain() {
    document.getElementById("message").innerHTML = "Wrong Shell - Try Again"; 
}


function ShuffleShells() {
   
    document.getElementById("first").style.order = Math.floor(Math.random() * 3) + 1;
    document.getElementById("second").style.order = Math.floor(Math.random() * 3) + 1;
    document.getElementById("third").style.order = Math.floor(Math.random() * 3) + 1;
}


