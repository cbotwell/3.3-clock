var content = document.getElementsByTagName('body')[0];
var time = document.getElementById('t');
var bar = document.getElementById('bar');

var timeToHex = function (t, mult) {
    var toHex = t * 255 / mult;
    toHex = parseInt(toHex);
    return toHex.toString(16);
};

window.setInterval ( function() {
    var date = new Date ();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var current = hours + ":" + minutes + ":" + seconds;
    var current10 = hours + ":" + 0 + minutes + ":" + 0 + seconds;
    var current10min = hours + ":" + 0 + minutes + ":" + seconds;
    var current10sec = hours + ":" + minutes + ":" + 0 + seconds;

    if (minutes < 10 && seconds < 10) {
        console.log(current10);
        time.innerHTML = current10;
    } else if (minutes < 10){
        console.log(current10min);
        time.innerHTML = current10min;
    } else if (seconds < 10) {
        console.log(current10sec);
        time.innerHTML = current10sec;
    } else {
        console.log(current);
        time.innerHTML = current;
    }

    var percent = seconds / 60;

    console.log(percent);
    bar.style.width = percent * 100 + '%';

    var color = '#' + timeToHex(seconds, 60) + timeToHex(minutes, 60) + timeToHex(hours, 60);
    content.style.background = color;
    console.log(color);

    var hextime = timeToHex(seconds, 60) + ':' + timeToHex(minutes, 60) + ':' + timeToHex(hours, 60);
    content.onMouseOver = function () {
        time.innerHTML = hextime;
    };

}, 1000 );


