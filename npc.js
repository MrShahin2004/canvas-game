"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;
let NumberOfEnemies = 100;
let EnemiesArray = [];

class Enemy {
    constructor() {
        this.x = Math.random() * CanvasWidth;
        this.y = Math.random() * CanvasHeight;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
    }
    draw() {
        CTX.fillRect(this.x, this.y, this.width, this.height);
    }
}

for (let i = 0 ; i < NumberOfEnemies; i++) {
    EnemiesArray.push(new Enemy());
}

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    EnemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
    })

    requestAnimationFrame(Animate);
}

Animate();
