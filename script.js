"use strict";
const $ = document;

const Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 600;
let CanvasHeight = Canvas.height = 600;

let PlayerImage = new Image();
PlayerImage.src = "./assets/shadow_dog.png";

const SpriteWidth = 575;
const SpriteHeight = 523;
let FrameX = 0;
let FrameY = 0;
let GameFrame = 0;
let StaggerFrames = 5;

let SpriteAnimations = [];
let AnimationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    }
];

AnimationStates.forEach((state,
                         index) => {
    let Frames = {
        loc: []
    };

    for (let j = 0 ; j < state.frames ; j++) {
        let PositionX = j * SpriteWidth;
        let PositionY = index * SpriteHeight;

        Frames.loc.push({x: PositionX, y: PositionY});
    }

    SpriteAnimations[state.name] = Frames;
});

console.log(SpriteAnimations);

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    let Position = Math.floor(GameFrame / StaggerFrames) % 6;
    FrameX = SpriteWidth * Position;

    CTX.drawImage(PlayerImage, FrameX, FrameY * SpriteHeight,
        SpriteWidth, SpriteHeight,
        0, 0, SpriteWidth, SpriteHeight);

    GameFrame++;
    requestAnimationFrame(Animate);
}

Animate();
