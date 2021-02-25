var mouseEvent = "empty";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 3;
var lastPositionOfX, lastPositionOfY;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    var currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent === "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
    }

    lastPositionOfX = currentPositionOfMouseX;
    lastPositionOfY = currentPositionOfMouseY;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfTouchX;
    lastPositionOfTouchY = currentPositionOfTouchY;

}