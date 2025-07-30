"use strict";
const $ = document;

let Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 800;
let CanvasHeight = Canvas.height = 700;

let GameSpeed = 5;
let BackgroundLayer1 = new Image();
BackgroundLayer1.src = "./assets/backgroundLayers/layer-1.png";
