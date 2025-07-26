"use strict";
const $ = document;

const Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 600;
let CanvasHeight = Canvas.height = 600;
let x = 0;

let PlayerImage = new Image();
PlayerImage.src = "./assets/shadow_dog.png";

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    CTX.fillRect(x, 50, 100, 100);
    x++;

    requestAnimationFrame(Animate);
}

Animate();
