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
    boardWidth : "7 cells wide.",
    boardHeight : "7 cells long.",
    numShips : 3,
    shipLength : 3,
    shipsSunk : 0,
    ships : [{locations: ['06', '16', '26'], hits: ['', '', '']},
             {locations: ['24', '34', '44'], hits: ['', '', '']},
             {locations: ['10', '11', '12'], hits: ['', '', 'hit']}],
    
    fire : function(guess) {
        for (i=0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = 'hit';
                return true
            }
        }
        return false
    }
}


var guess = '16';
console.log(model.fire(guess));



// loc1 : 1,
//     loc2 : 2,
//     loc3 : 3,
//     loc4 : 4,
//     loc5 : 5,
//     loc6 : 6,
//     loc7 : 7,
//     loc8 : 8,
//     loc9 : 9,
//     cells : [
//              '00', '01', '02', '03', '04', '05', '06', '07',
//              '10', '11', '12', '13', '14', '15', '16', '17',
//              '20', '21', '22', '23', '24', '25', '26', '27',
//              '30', '31', '32', '33', '34', '35', '36', '37',
//              '40', '41', '42', '43', '44', '45', '46', '47',
//              '50', '51', '52', '53', '54', '55', '56', '57',
//              '60', '61', '62', '63', '64', '65', '66', '67'
//             ],

//     locs : [[this.loc1, this.loc2, this.loc3], [this.loc4, this.loc5, this.loc6,], [this.loc7, this.loc8, this.loc9]]