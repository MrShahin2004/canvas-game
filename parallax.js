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

let SliderEl = $.querySelector("#slider");
SliderEl.value = GameSpeed;
let ShowGameSpeed = $.querySelector("#show-game-speed");
ShowGameSpeed.innerHTML = GameSpeed;

SliderEl.addEventListener("change", (event) => {
    GameSpeed = event.target.value;
    ShowGameSpeed.innerHTML = GameSpeed;
});
