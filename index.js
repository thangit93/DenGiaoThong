var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "10px Arial";

let imgD1 = document.getElementById("d1");
let imgD2 = document.getElementById("d2");
let imgD3 = document.getElementById("d3");
let imgD4 = document.getElementById("d4");
let imgD5 = document.getElementById("d5");
let imgD6 = document.getElementById("d6");
let imgD7 = document.getElementById("d7");
let imgD8 = document.getElementById("d8");
let imgD9 = document.getElementById("d9");
let imgD10 = document.getElementById("d10");
let imgD11 = document.getElementById("d11");
let imgD12 = document.getElementById("d12");
let imgD13 = document.getElementById("d13");
let imgD14 = document.getElementById("d14");
let imgD15 = document.getElementById("d15");



// x0,y0: the line's starting point
// x1,y1: the line's ending point
// width: the distance the arrowhead perpendicularly extends away from the line
// height: the distance the arrowhead extends backward from the endpoint
// arrowStart: true/false directing to draw arrowhead at the line's starting point
// arrowEnd: true/false directing to draw arrowhead at the line's ending point

function drawLineWithArrows(x0, y0, x1, y1, aWidth, aLength, arrowStart, arrowEnd) {
    x0 = x0 + 200;
    x1 = x1 + 200;
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);
    //
    ctx.translate(x0, y0);
    ctx.rotate(angle);
    ctx.moveTo(0, 0);
    ctx.lineTo(length, 0);
    if (arrowStart) {
        ctx.moveTo(aLength, -aWidth);
        ctx.lineTo(0, 0);
        ctx.lineTo(aLength, aWidth);
    }
    if (arrowEnd) {
        ctx.moveTo(length - aLength, -aWidth);
        ctx.lineTo(length, 0);
        ctx.lineTo(length - aLength, aWidth);
    }
    //
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}

function drawLine(x0, y0, x1, y1) {
    x0 = x0 + 200;
    x1 = x1 + 200;
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);
    //
    ctx.translate(x0, y0);
    ctx.rotate(angle);
    ctx.moveTo(0, 0);
    ctx.lineTo(length, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

window.onload = function () {
    ctx.drawImage(imgD1, 0, 0, 40, 100);
    ctx.fillText("d1", 0, 100);
    ctx.drawImage(imgD2, 60, 0, 40, 100);
    ctx.fillText("d2", 60, 100);
    ctx.drawImage(imgD3, 120, 0, 40, 100);
    ctx.fillText("d3", 120, 100);

    ctx.drawImage(imgD4, 0, 600, 40, 100);
    ctx.fillText("d4", 0, 700);
    ctx.drawImage(imgD5, 60, 600, 40, 100);
    ctx.fillText("d5", 60, 700);
    ctx.drawImage(imgD6, 120, 600, 40, 100);
    ctx.fillText("d6", 120, 700);
    ctx.drawImage(imgD7, 180, 600, 40, 100);
    ctx.fillText("d7", 180, 700);
    ctx.drawImage(imgD8, 240, 600, 40, 100);
    ctx.fillText("d8", 240, 700);
    ctx.drawImage(imgD9, 300, 600, 40, 100);
    ctx.fillText("d9", 300, 700);

    ctx.drawImage(imgD10, 620, 600, 40, 100);
    ctx.fillText("d10", 620, 700);
    ctx.drawImage(imgD11, 680, 600, 40, 100);
    ctx.fillText("d11", 680, 700);
    ctx.drawImage(imgD12, 740, 600, 40, 100);
    ctx.fillText("d12", 740, 700);

    ctx.drawImage(imgD13, 620, 0, 40, 100);
    ctx.fillText("d13", 620, 100);
    ctx.drawImage(imgD14, 680, 0, 40, 100);
    ctx.fillText("d14", 680, 100);
    ctx.drawImage(imgD15, 740, 0, 40, 100);
    ctx.fillText("d15", 740, 100);
}

imgD1.src = 'img/go.jpg';
imgD2.src = 'img/go.jpg';
imgD3.src = 'img/go.jpg';


// ctx.moveTo(420,100);
// ctx.quadraticCurveTo(450,270,300,230);
// ctx.strokeStyle = 'green';
// ctx.stroke();

// var d2 = canvas.getContext("2d"); 
// d2.moveTo(450,100);
// d2.lineTo(450,230)
// d2.strokeStyle = 'green';
// d2.stroke();

function drawGreenArrows(x0, y0, x1, y1, aWidth, aLength, arrowStart, arrowEnd) {
    x0 = x0;
    x1 = x1;
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);
    //
    ctx.translate(x0, y0);
    ctx.rotate(angle);
    ctx.moveTo(0, 0);
    ctx.lineTo(length, 0);
    if (arrowStart) {
        ctx.moveTo(aLength, -aWidth);
        ctx.lineTo(0, 0);
        ctx.lineTo(aLength, aWidth);
    }
    if (arrowEnd) {
        ctx.moveTo(length - aLength, -aWidth);
        ctx.lineTo(length, 0);
        ctx.lineTo(length - aLength, aWidth);
    }
    //
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

//doc
drawLine(200,0,200,200);
drawLine(200,500,200,700);
drawLine(300,0,300,200);
drawLine(300,500,300,700);
drawLine(400,0,400,250);
drawLine(400,450,400,700);

//ngang
drawLine(0,200,200,200);
drawLine(0,300,200,300);
drawLine(0,400,200,400);
drawLine(0,500,200,500);
drawLine(400,250,600,250);
drawLine(400,350,600,350);
drawLine(400,450,600,450);

drawLineWithArrows(250, 0, 250, 50, 5, 8, true, false);
drawLineWithArrows(350, 0, 350, 50, 5, 8, false, true);

drawLineWithArrows(0, 250, 50, 250, 5, 8, true, false);
drawLineWithArrows(0, 350, 50, 350, 5, 8, false, true);
drawLineWithArrows(0, 450, 50, 450, 5, 8, false, true);

drawLineWithArrows(250, 650, 250, 700, 5, 8, false, true);
drawLineWithArrows(350, 650, 350, 700, 5, 8, true, false);

drawLineWithArrows(550, 300, 600, 300, 5, 8, true, false);
drawLineWithArrows(550, 400, 600, 400, 5, 8, false, true);

// drawGreenArrows(450, 100, 450, 230, 5, 8, false, true);
