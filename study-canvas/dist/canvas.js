"use strict";
window.addEventListener('load', function () {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillRect(100, 50, 200, 200);
    ctx.strokeStyle = 'red';
    ctx.strokeRect(500, 50, 200, 200);
    ctx.beginPath();
    ctx.moveTo(100, 500);
    ctx.lineTo(200, 500);
    ctx.lineTo(200, 600);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    var painting = false;
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting)
            return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});
