import {sprite} from "../base/sprite.js";

export class background extends sprite {
    constructor() {
        const image = sprite.getImage('background');
        super(image, 0, 0, image.width, image.height, 0, 0, window.innerWidth, window.innerHeight);
    }
}