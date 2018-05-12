import {pencil} from "./pencil.js";
import {sprite} from "../base/sprite.js";

export class downPencil extends pencil {

    constructor(top) {
        const image = sprite.getImage('pencilDown');
        super(image, top);
    }

    draw() {
        let gap = window.innerHeight / 5;
        this.y = this.top + gap;
        super.draw();
    }
}