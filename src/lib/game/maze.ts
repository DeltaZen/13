import {rand} from "../utils/rnd";
import {createCanvas} from "./res";
import {createTexture, Texture} from "../graphics/draw2d";

export function generateMapBackground(): Texture {
    const size = 512;
    const ctx = createCanvas(size, true);

    ctx.fillStyle = "darkgreen";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "green";
    ctx.save();
    ctx.scale(1, 1/4);
    for (let i = 0; i < 32; ++i) {
        ctx.beginPath()
        ctx.arc(rand() % size, rand() % (size * 4), 4 + rand() % 16, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore();

    ctx.fillStyle = "darkgrey";
    for (let i = 0; i < 32; ++i) {
        ctx.beginPath()
        ctx.arc(rand() % size, rand() % size, 2, 0, Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    ctx.fillStyle = "darkolivegreen";
    for (let i = 0; i < 2048; ++i) {
        ctx.fillRect(rand() % size, rand() % size, 1, 2 + rand() % 4);
    }

    ctx.font = "5px emoji";
    ctx.fillStyle = "white";
    ctx.save();
    ctx.scale(1, 0.5);
    for (let i = 0; i < 128; ++i) {
        ctx.fillText(["🌼", "🌸","🌺", "🍀"][rand() % 4], rand() % size, rand() % (size * 2));
    }
    ctx.restore();

    ctx.font = "8px emoji";
    for (let i = 0; i < 32; ++i) {
        ctx.fillText(["🌷", "🌻", "🥀","🌿"][rand() %4], rand() % size, rand() % size);
    }

    const img = createTexture(ctx.canvas);
    ctx.canvas.width = ctx.canvas.height = 0;
    return img;
}

// let mapHeights: number[][];
//
// export function getMapHeight(x:number, y:number):number {
//
// }
