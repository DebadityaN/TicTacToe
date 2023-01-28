var count = 0;

const winningCombos = [
    // top row
    [0, 1, 2],

    // middle row
    [3, 4, 5],

    // bottom row
    [6, 7, 8],

    // left colums 
    [0, 3, 6],

    // middle column
    [1, 4, 7],

    // right column
    [2, 5, 8],

    // diagonal top left to bottom right
    [0, 4, 8],

    // diagonal top right to bottom left
    [2, 4, 6],

]

var v = 0;
var end = false;

$(function() {

    // code for if a box is clicked
    $('.box').click(function(){
        if ($(this).hasClass('done') != true && end == false) {
        
        // adding text to boxes and classes
        if (count % 2 == 0) {
            $(this).text('✕').addClass('done').addClass('x');
            v++;
        } else if (count % 2 != 0) {
            $(this).text('◯').addClass('done').addClass('o');
            v++;
        }
        count++;
        
        // retrieving all elements
        var items = Array.from(document.getElementsByClassName('box'));
        var index = [];

        for (let item of items) {
            index.push(item.classList[item.classList.length - 1]);
        }

        function checkline(wincomb, arr, val) {
            if (arr[wincomb[0]] == val && arr[wincomb[1]] == val && arr[wincomb[2]] == val) {
                return true;
            }
        }
        
        if (v == 9) {
            $('#title').text('It\'s a tie!')
            end = true;
        }

        for (const i of winningCombos) {
            if (checkline(i, index, 'x')) {
                $('#title').text('X wins!');
                end = true;
            } else if (checkline(i, index, 'o')) {
                $('#title').text('O wins!');
                end = true;
            }
        }

        }
    });

    document.onkeydown = function (k) {
        if (k.key == 'r') {
            location.reload();
        }
    }

});