// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 100);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = getRandomInt(300) + 'px';
            elem.style.left = getRandomInt(300) + 'px';
        }
    }
}

function videoMove() {
    var elem = document.getElementById("videoAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 100);
    function frame() {
        if (pos == 10) {
            elem.style.top = 0 + 'px';
            elem.style.left = 0 + 'px';
            clearInterval(id);

        } else {
            pos++;
            elem.style.top = getRandomInt(200) + 'px';
            elem.style.left = getRandomInt(200) + 'px';
        }
    }
}