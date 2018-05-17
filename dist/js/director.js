"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataStore = require("./base/dataStore.js");

var _upPencil = require("./runtime/upPencil.js");

var _downPencil = require("./runtime/downPencil.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var director = exports.director = function () {
    _createClass(director, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!director.instance) {
                director.instance = new director();
            }
            return director.instance;
        }
    }]);

    function director() {
        _classCallCheck(this, director);

        this.dataStore = _dataStore.dataStore.getInstance();
        this.moveSpeed = 3.5;
    }

    _createClass(director, [{
        key: "createPencil",
        value: function createPencil() {
            var minTop = window.innerHeight / 8;
            var maxTop = window.innerHeight / 2;
            var top = minTop + Math.random() * (maxTop - minTop);
            this.dataStore.get('pencils').push(new _upPencil.upPencil(top));
            this.dataStore.get('pencils').push(new _downPencil.downPencil(top));
        }
    }, {
        key: "birdsEvent",
        value: function birdsEvent() {
            for (var i = 0; i <= 2; i++) {
                this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
            }
            this.dataStore.get('birds').time = 0;
        }

        // 判断小鸟是否和铅笔撞击

    }, {
        key: "check",


        // 判断小鸟是否撞击地面和铅笔
        value: function check() {
            var birds = this.dataStore.get('birds');
            var land = this.dataStore.get('land');
            var pencils = this.dataStore.get('pencils');
            // 判断撞击地板
            if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
                this.isGameOver = true;
                return;
            }

            //  小鸟的边框模型
            var birdsBorder = {
                top: birds.y[0],
                bottom: birds.birdsY[0] + birds.birdsHeight[0],
                left: birds.birdsX[0],
                right: birds.birdsX[0] + birds.birdsWidth[0]
            };

            var length = pencils.length;
            for (var i = 0; i < length; i++) {
                var pencil = pencils[i];
                var pencilBorder = {
                    top: pencil.y,
                    bottom: pencil.y + pencil.height,
                    left: pencil.x,
                    right: pencil.x + pencil.width
                };

                if (director.isStrike(birdsBorder, pencilBorder)) {
                    this.isGameOver = true;
                    return;
                }
            }
        }
    }, {
        key: "run",
        value: function run() {
            var _this = this;

            this.check();
            if (!this.isGameOver) {
                this.dataStore.get('background').draw();

                var pencils = this.dataStore.get('pencils');
                if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                    pencils.shift();
                    pencils.shift();
                }

                if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
                    this.createPencil();
                }

                this.dataStore.get('pencils').forEach(function (value) {
                    value.draw();
                });

                this.dataStore.get('land').draw();
                this.dataStore.get('birds').draw();
                var timer = requestAnimationFrame(function () {
                    return _this.run();
                });
                this.dataStore.put('timer', timer);
            } else {
                cancelAnimationFrame(this.dataStore.get('timer'));
                this.dataStore.destroy();
            }
        }
    }], [{
        key: "isStrike",
        value: function isStrike(bird, pencil) {
            var s = false;
            if (bird.top > pencil.bottom || bird.bottom < pencil.top || bird.right < pencil.left || bird.left > pencil.right) s = true;
            return !s;
        }
    }]);

    return director;
}();
//# sourceMappingURL=director.js.map