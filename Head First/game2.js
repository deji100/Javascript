var view = {
    displayMessage : function(mes) {
        var message = document.getElementById('message');
        message.innerHTML = mes;
    },
    displayHit : function(location) {
        var hit = document.getElementById(location);
        hit.setAttribute('class', 'hit')
    },
    displayMiss : function(location) {
        var miss = document.getElementById(location);
        miss.setAttribute('class', 'miss')
    }
}

var model = {
    boardSize : 7,
    cells : 49,
    rows : ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    columns : [1, 2, 3, 4, 5, 6, 7],
    numShips : 3,
    shipSize : 3,
    shipsSunk : 0,
    ships : [{locations: ['06', '16', '26'], hits: ['', '', '']},
             {locations: ['24', '34', '44'], hits: ['', '', '']},
             {locations: ['10', '11', '12'], hits: ['', '', '']}],
    
    fire : function(guess) {
        for (var i=0; i < this.numShips; i++) {
            var ship = this.ships[i]
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my ship!!!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("MISS!");
        return false;
    },
    isSunk : function(ship) {
        for (var i=0; i < this.shipSize; i++) {
            if (ship.hits[i] !== 'hit')  
                return false;
        }
        return true;
    }
}

function parseGuess(guess) {
    var alphabets = model.rows;

    if (guess == null || guess.length != 2) {
        alert("Oops, please enter a valid Letter and Number on the board.");
    }
    else {
        var firstChar = guess.charAt(0);
        var row = alphabets.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        }
        else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that is way off the board.");
        }
        else {
            return row + column;
        }
    }
    return null;
}

var controller = {
    guesses : 0,
    processGuess : function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships in "+ this.guesses +" guesses.")
            }
        }
    }
}

function init() {
    var button = document.getElementById("fireButton");
    button.onclick = handleFireButton;
    var guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;
}

function handleKeyPress(e) {
    var fireButton = document.getElementById('fireButton')
    if (e.keyCode  === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = '';
}

window.onload = init;


