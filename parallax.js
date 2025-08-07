"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 800;
let CanvasHeight = Canvas.height = 700;
let GameSpeed = 10;

let BackgroundLayer1 = new Image();
BackgroundLayer1.src = "./assets/backgroundLayers/layer-1.png";
let BackgroundLayer2 = new Image();
BackgroundLayer2.src = "./assets/backgroundLayers/layer-2.png";
let BackgroundLayer3 = new Image();
BackgroundLayer3.src = "./assets/backgroundLayers/layer-3.png";
let BackgroundLayer4 = new Image();
BackgroundLayer4.src = "./assets/backgroundLayers/layer-4.png";
let BackgroundLayer5 = new Image();
BackgroundLayer5.src = "./assets/backgroundLayers/layer-5.png";

window.addEventListener("load", () => {
    let SliderEl = $.querySelector("#slider");
    SliderEl.value = GameSpeed;
    let ShowGameSpeed = $.querySelector("#show-game-speed");
    ShowGameSpeed.innerHTML = GameSpeed;

    SliderEl.addEventListener("change", (event) => {
        GameSpeed = event.target.value;
        ShowGameSpeed.innerHTML = GameSpeed;
    });

    class Layer {
        constructor(image, speedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = GameSpeed * this.speedModifier;
        }

        update() {
            this.speed = GameSpeed * this.speedModifier;
            if (this.x <= -this.width) {
                this.x = 0;
            }

            this.x = Math.floor(this.x - this.speed);
        }

        draw() {
            CTX.drawImage(this.image, this.x, this.y, this.width, this.height);
            CTX.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    let Layer1 = new Layer(BackgroundLayer1, 0.25);
    let Layer2 = new Layer(BackgroundLayer2, 0.5);
    let Layer3 = new Layer(BackgroundLayer3, 0.75);
    let Layer4 = new Layer(BackgroundLayer4, 1);
    let Layer5 = new Layer(BackgroundLayer5, 1.25);

    let GameObject = [Layer1, Layer2, Layer3, Layer4, Layer5];

    function Animate() {
        CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
        GameObject.forEach((object) => {
            object.draw();
            object.update();
        });

        requestAnimationFrame(Animate);
    }

    Animate();
});
