// Function to display the winning message
function WinnerMessage() {
    document.getElementById("message").innerHTML = "You Won!";
}

// Function to display 'try again' message for losing shells
function TryAgain() {
    document.getElementById("message").innerHTML = "Wrong Shell - Try Again";
}

// Function to shuffle the order of shells on page load
function ShuffleShells() {
    // Setting a random order for each shell image
    document.getElementById("first").style.order = Math.floor(Math.random() * 3) + 1;
    document.getElementById("second").style.order = Math.floor(Math.random() * 3) + 1;
    document.getElementById("third").style.order = Math.floor(Math.random() * 3) + 1;
}

