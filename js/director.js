import {dataStore} from "./base/dataStore.js";
import {upPencil} from "./runtime/upPencil.js";
import {downPencil} from "./runtime/downPencil.js";

export class director {
    static getInstance() {
        if (!director.instance) {
            director.instance = new director();
        }
        return director.instance;
    }

    constructor() {
        this.dataStore = dataStore.getInstance();
        this.moveSpeed = 3.5;
    }

    createPencil() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new upPencil(top));
        this.dataStore.get('pencils').push(new downPencil(top));
    }

    birdsEvent() {
        for (let i = 0; i <= 2; i++) {
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
        }
        this.dataStore.get('birds').time = 0;
    }

    // 判断小鸟是否撞击地面和铅笔
    check() {
        const birds = this.dataStore.get('birds');
        const land = this.dataStore.get('land');
        console.log('birdsY: ' + birds.birdsY[0] + ' ########## birdsHeight: ' + birds.birdsHeight[0] + ' ########## land.y: ' + land.y);
        // 判断撞击地板
        if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
            this.isGameOver = true;
            return;
        }
    }

    run() {
        this.check();
        if (!this.isGameOver) {
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils');
            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                pencils.shift();
                pencils.shift();
            }

            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
                this.createPencil();
            }

            this.dataStore.get('pencils').forEach(function(value) {
                value.draw();
            });

            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();
            let timer = requestAnimationFrame(() => this.run());
            this.dataStore.put('timer', timer);
        } else {
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
        }
    }
}