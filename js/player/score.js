import {dataStore} from "../base/dataStore.js";

export class score {

    constructor() {
        this.ctx = dataStore.getInstance().ctx;
        this.scoreNumber = 0;
        // 变量控制加分，只加一次
        this.isScore = true;
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#151e29';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth / 2,
            window.innerHeight / 18,
            1000
        );
    }
}