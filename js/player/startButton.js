import {sprite} from "../base/sprite.js";

export class startButton extends sprite {

    constructor() {
        const image = sprite.getImage('startButton');
        super(image, 0, 0, image.width, image.height, (window.innerWidth - image.width) / 2, (window.innerHeight - image.height) / 2.5, image.width, image.height);
    }
}