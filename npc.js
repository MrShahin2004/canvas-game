"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;
let NumberOfEnemies = 100;
let EnemiesArray = [];

let EnemyImage = new Image();
EnemyImage.src = "./assets/enemies/enemy1.png"

class Enemy {
    constructor() {
        this.x = Math.random() * CanvasWidth;
        this.y = Math.random() * CanvasHeight;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;
    }

    draw() {
        CTX.drawImage(EnemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < NumberOfEnemies; i++) {
    EnemiesArray.push(new Enemy());
}

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    EnemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
    });

    requestAnimationFrame(Animate);
}

Animate();
