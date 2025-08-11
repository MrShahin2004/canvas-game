"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;

class Enemy {
    constructor() {
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
    }
}
let Enemy1 = new Enemy();

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);

    Enemy1.x++;
    Enemy1.y++;
    CTX.fillRect(Enemy1.x, Enemy1.y, Enemy1.width, Enemy1.height);

    requestAnimationFrame(Animate);
}

Animate();
