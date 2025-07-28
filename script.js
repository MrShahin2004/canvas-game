"use strict";
const $ = document;

const Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 600;
let CanvasHeight = Canvas.height = 600;

let PlayerImage = new Image();
PlayerImage.src = "./assets/shadow_dog.png";

const SpriteWidth = 575;
const SpriteHeight = 523;
let FrameX = 0;
let FrameY = 0;
let GameFrame = 0;
let StaggerFrames = 5;

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    CTX.drawImage(PlayerImage, FrameX * SpriteWidth, FrameY * SpriteHeight,
        SpriteWidth, SpriteHeight,
        0, 0, SpriteWidth, SpriteHeight);

    GameFrame++;
    requestAnimationFrame(Animate);
}

Animate();
