// 循环3张小鸟图片
import {sprite} from "../base/sprite.js";

export class birds extends sprite {

    constructor() {
        const image = sprite.getImage('birds');
        super(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);

        //  数组存储小鸟的三种状态
        this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
        this.clippingY = [10, 10, 10];
        this.clippingWidth = [34, 34, 34];
        this.clippingHeight = [24, 24, 24];
        const birdX = window.innerWidth / 4;
        this.birdsX = [birdX, birdX, birdX];
        const birdY = window.innerHeight / 2;
        this.birdsY = [birdY, birdY, birdY];
        const birdWidth = 34;
        this.birdsWidth = [birdWidth, birdWidth, birdWidth];
        const birdHeight = 24;
        this.birdsHeight = [birdHeight, birdHeight, birdHeight];
        this.y = [birdY, birdY, birdY];
        this.index = 0;
        this.count = 0;
        this.time = 0;
    }

    draw() {
        // 切换小鸟图片的速度
        const speed = .2;
        this.count = this.count + speed;
        if (this.index >= 2) {
            this.count = 0;
        }
        this.index = Math.floor(this.count);

        const g = 0.98 / 2.4;
        // 向上的偏移量
        const offsetUp = 30;
        // 小鸟的位移
        const offsetY = (g * this.time * (this.time - offsetUp)) /2;

        for (let i = 0; i <= 2; i++) {
            this.birdsY[i] = this.y[i] + offsetY;
        }
        this.time++;

        super.draw(this.img, this.clippingX[this.index], this.clippingY[this.index], this.clippingWidth[this.index],
            this.clippingHeight[this.index], this.birdsX[this.index], this.birdsY[this.index], this.birdsWidth[this.index], this.birdsHeight[this.index]);
    }
}