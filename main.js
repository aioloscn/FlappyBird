import {resourceLoader} from "./js/base/resourceLoader.js";
import {background} from "./js/runtime/background.js";
import {dataStore} from "./js/base/dataStore.js";
import {director} from "./js/director.js";
import {land} from "./js/runtime/land.js";
import {birds} from "./js/player/birds.js";
import {startButton} from "./js/player/startButton.js";
import {score} from "./js/player/score.js";

export class main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = dataStore.getInstance();
        this.director = director.getInstance();
        const loader = resourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init()
    }

    init() {

        this.director.isGameOver = false;
        this.dataStore
            .put('pencils', [])
            .put('background', background)
            .put('land', land)
            .put('score', score)
            .put('birds', birds)
            .put('startButton', startButton);
        this.registerEvent();
        // 在游戏逻辑运行之前创建铅笔
        this.director.createPencil();
        this.director.run();
    }

    registerEvent() {
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            // 用箭头函数才能将指针指向main，才能取到main中的变量
            if (this.director.isGameOver) {
                this.init();
            } else {
                this.director.birdsEvent();
            }
        });
    }
}