//1 point for X
//10 point for O

var cross = true;

var field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var turns = 0;


function turn(x, y) {
    if(field[x][y] != 0){
        return;
    }
    turns++;
    if(cross) {
        field[x][y] = 1;
        makePost('Крестики - ('+x+';'+y+')');
        var elem = document.getElementById(x.toString()+y.toString());
        elem.innerHTML = '<img src="imgs/cross.png">';
        cross = false;
    } else {
        field[x][y] = 10;
        makePost('Нолики - ('+x+';'+y+')');
        var elem = document.getElementById(x.toString()+y.toString());
        elem.innerHTML = '<img src="imgs/zero.png">';
        cross = true;
    }
    checkWin();
}

function makePost(str){
    var hist = document.getElementById('history');
    hist.innerHTML += '<p>'+str+'</p>';
}

function zeroWin() {
    alert("Нолики выиграли!");
    location.reload();
}

function crossWin() {
    alert("Крестики выиграли!");
    location.reload();
}

function drow() {
    alert("Ничья!");
    location.reload();
}

function checkWin() {
    
    for(var i = 0; i < field.length; i++){
        var sum = 0;
        for(var j = 0; j < field[i].length; j++){ //horizontal check
            sum += field[i][j];
        }
        if(sum == 30) {
            zeroWin();
            return;
        }
        if(sum == 3) {
            crossWin();
            return;
        }
        
        sum = 0;
        for(var j = 0; j < field[i].length; j++){ //vertical check
            sum += field[j][i];
        }
        if(sum == 30) {
            zeroWin();
            return;
        }
        if(sum == 3) {
            crossWin();
            return;
        }
        
        sum = field[0][0] + field[1][1] + field[2][2];
        if(sum == 30) {
            zeroWin();
            return;
        }
        if(sum == 3) {
            crossWin();
            return;
        }
        
        sum = field[2][0] + field[1][1] + field[0][2];
        if(sum == 30) {
            zeroWin();
            return;
        }
        if(sum == 3) {
            crossWin();
            return;
        }
    }
    if(turns == 9) {
        drow();
    }
}