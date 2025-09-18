"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;
let NumberOfEnemies = 20;
let EnemiesArray = [];

let GameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = "./assets/enemies/enemy2.png";
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (CanvasWidth - this.width);
        this.y = Math.random() * (CanvasHeight - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }

    update() {
        this.x -= this.speed;
        this.y += Math.sin(this.angle) * this.curve;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) {
            this.x = Canvas.width;
        }

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
