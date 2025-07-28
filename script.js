"use strict";
const $ = document;

let PlayerState = "run";

const Canvas = $.querySelector("#canvas");
let CTX = Canvas.getContext("2d");
let CanvasWidth = Canvas.width = 600;
let CanvasHeight = Canvas.height = 600;

let PlayerImage = new Image();
PlayerImage.src = "./assets/shadow_dog.png";

const SpriteWidth = 575;
const SpriteHeight = 523;

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
    },
    {
        name: "fall",
        frames: 9
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 12
    },
    {
        name: "getHit",
        frames: 4
    }
];

AnimationStates.forEach((state,
                         index) => {
    let Frames = {
        loc: []
    };

    for (let j = 0; j < state.frames; j++) {
        let PositionX = j * SpriteWidth;
        let PositionY = index * SpriteHeight;

        Frames.loc.push({x: PositionX, y: PositionY});
    }

    SpriteAnimations[state.name] = Frames;
});

console.log(SpriteAnimations);

function Animate() {
    CTX.clearRect(0, 0, CanvasWidth, CanvasHeight);
    let Position =
        Math.floor(GameFrame / StaggerFrames) % SpriteAnimations[PlayerState].loc.length;

    let FrameX = SpriteWidth * Position;
    let FrameY = SpriteAnimations[PlayerState].loc[Position].y;

    CTX.drawImage(PlayerImage, FrameX, FrameY,
        SpriteWidth, SpriteHeight,
        0, 0, SpriteWidth, SpriteHeight);

    GameFrame++;
    requestAnimationFrame(Animate);
}

Animate();
