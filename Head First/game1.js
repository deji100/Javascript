var randomLoc = Math.floor(Math.random() * 5)
var location1 = randomLoc;
var location2 = Math.floor(Math.random() * 4);
var location3 = Math.floor(Math.random() * 3);
var guess;
var hit = 0;
var miss = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire (Enter a number from 0 - 6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number.");
    } 
    else {
        guesses += 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit")
            hit += 1;
            if (hit == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {
            alert("Miss")
            miss += 1;
        }
    }
}
alert("It took you "+guesses+" guesses to sink my battleship which means your shooting accuracy was "+ 3/guesses +"");
alert("You made "+ hit +" hits and "+ miss +" miss")