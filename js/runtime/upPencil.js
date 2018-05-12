import {pencil} from "./pencil.js";
import {sprite} from "../base/sprite.js";

export class upPencil extends pencil {

    constructor(top) {
        const image = sprite.getImage('pencilUp');
        super(image, top);
    }

    draw() {
        this.y = this.top - this.height;
        super.draw();
    }
}