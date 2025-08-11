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
    update() {
        this.x++;
        this.y++;
    }
    draw() {
        CTX.fillRect(this.x, this.y, this.width, this.height);
    }
}
let Enemy1 = new Enemy();

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    Enemy1.update();
    Enemy1.draw();

    requestAnimationFrame(Animate);
}

Animate();
