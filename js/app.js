var i = 0;
var txt = 'Developing ;)';
var speed = 350;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typeText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter();