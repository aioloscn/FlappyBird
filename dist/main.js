"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resourceLoader = require("./js/base/resourceLoader.js");

var _background = require("./js/runtime/background.js");

var _dataStore = require("./js/base/dataStore.js");

var _director = require("./js/director.js");

var _land = require("./js/runtime/land.js");

var _birds = require("./js/player/birds.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = exports.main = function () {
    function main() {
        var _this = this;

        _classCallCheck(this, main);

        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = _dataStore.dataStore.getInstance();
        this.director = _director.director.getInstance();
        var loader = _resourceLoader.resourceLoader.create();
        loader.onLoaded(function (map) {
            return _this.onResourceFirstLoaded(map);
        });
    }

    _createClass(main, [{
        key: "onResourceFirstLoaded",
        value: function onResourceFirstLoaded(map) {
            this.dataStore.ctx = this.ctx;
            this.dataStore.res = map;
            this.init();
        }
    }, {
        key: "init",
        value: function init() {

            this.director.isGameOver = false;
            this.dataStore.put('pencils', []).put('background', _background.background).put('land', _land.land).put('birds', _birds.birds);
            this.registerEvent();
            // 在游戏逻辑运行之前创建铅笔
            this.director.createPencil();
            this.director.run();
        }
    }, {
        key: "registerEvent",
        value: function registerEvent() {
            var _this2 = this;

            this.canvas.addEventListener('touchstart', function (e) {
                e.preventDefault();
                // 用箭头函数才能将指针指向main，才能取到main中的变量
                if (_this2.director.isGameOver) {
                    _this2.init();
                } else {
                    _this2.director.birdsEvent();
                }
            });
        }
    }]);

    return main;
}();
//# sourceMappingURL=main.js.map