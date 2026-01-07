"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 500;
let CanvasHeight = Canvas.height = 1000;
let NumberOfEnemies = 100;
let EnemiesArray = [];

let GameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = "./assets/enemies/enemy4.png";
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (Canvas.width - this.width);
        this.y = Math.random() * (Canvas.height - this.height);
        this.NewX = Math.random() * Canvas.width;
        this.NewY = Math.random() * Canvas.height;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
    }

    update() {
        if (GameFrame % this.interval === 0) {
            this.NewX = Math.random() * (Canvas.width - this.width);
            this.NewY = Math.random() * (Canvas.height - this.height);
        }

        let DX = this.x - this.NewX;
        let DY = this.y - this.NewY;
        this.x -= DX / 20;
        this.y -= DY / 20;

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
