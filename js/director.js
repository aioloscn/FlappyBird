import {dataStore} from "./base/dataStore.js";

export class director {
    static getInstance() {
        if (!director.instance) {
            director.instance = new director();
        }
        return director.instance;
    }

    constructor() {
        this.dataStore = dataStore.getInstance();
        this.moveSpeed = 2;
    }

    run() {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
        let timer = requestAnimationFrame(() => this.run());
        this.dataStore.put('timer', timer);
        // cancelAnimationFrame(this.dataStore.get('timer'));
    }
}