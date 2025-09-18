"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;
let NumberOfEnemies = 500;
let EnemiesArray = [];

let GameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = "./assets/enemies/enemy1.png";
        this.x = Math.random() * CanvasWidth;
        this.y = Math.random() * CanvasHeight;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;

        // Animating the sprites
        if (GameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        CTX.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
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

    GameFrame++;
    requestAnimationFrame(Animate);
}

Animate();
