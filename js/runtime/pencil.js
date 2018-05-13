import {sprite} from "../base/sprite.js";
import {director} from "../director.js";

export class pencil extends sprite {

    constructor(image, top) {
        super(image, 0, 0, image.width, image.height, window.innerWidth, 0, image.width, image.height);
        this.top = top;
    }

    draw() {
        this.x = this.x - director.getInstance().moveSpeed;
        super.draw(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.img.width, this.img.height);
    }
}