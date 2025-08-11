"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;

// let Enemy1 = {
//     x: 10,
//     y: 50,
//     width: 100,
//     height: 100
// };

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);

    Enemy1.x++;
    Enemy1.y++;
    CTX.fillRect(Enemy1.x, Enemy1.y, Enemy1.width, Enemy1.height);

    requestAnimationFrame(Animate);
}

Animate();
