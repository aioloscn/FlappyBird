import {resourceLoader} from "./js/base/resourceLoader.js";
import {background} from "./js/runtime/background.js";
import {dataStore} from "./js/base/dataStore.js";
import {director} from "./js/director.js";
import {land} from "./js/runtime/land.js";

export class main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = dataStore.getInstance();
        const loader = resourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init()
    }

    init() {
        this.dataStore
            .put('background', background)
            .put('land', land);
        director.getInstance().run();
    }
}