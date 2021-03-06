"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.birds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sprite2 = require("../base/sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 循环3张小鸟图片


var birds = exports.birds = function (_sprite) {
    _inherits(birds, _sprite);

    function birds() {
        _classCallCheck(this, birds);

        var image = _sprite2.sprite.getImage('birds');

        //  数组存储小鸟的三种状态
        var _this = _possibleConstructorReturn(this, (birds.__proto__ || Object.getPrototypeOf(birds)).call(this, image, 0, 0, image.width, image.height, 0, 0, image.width, image.height));

        _this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
        _this.clippingY = [10, 10, 10];
        _this.clippingWidth = [34, 34, 34];
        _this.clippingHeight = [24, 24, 24];
        var birdX = window.innerWidth / 4;
        _this.birdsX = [birdX, birdX, birdX];
        var birdY = window.innerHeight / 2;
        _this.birdsY = [birdY, birdY, birdY];
        var birdWidth = 34;
        _this.birdsWidth = [birdWidth, birdWidth, birdWidth];
        var birdHeight = 24;
        _this.birdsHeight = [birdHeight, birdHeight, birdHeight];
        _this.y = [birdY, birdY, birdY];
        _this.index = 0;
        _this.count = 0;
        _this.time = 0;
        return _this;
    }

    _createClass(birds, [{
        key: "draw",
        value: function draw() {
            // 切换小鸟图片的速度
            var speed = .2;
            this.count = this.count + speed;
            if (this.index >= 2) {
                this.count = 0;
            }
            this.index = Math.floor(this.count);

            var g = 0.98 / 2.4;
            // 向上的偏移量
            var offsetUp = 30;
            // 小鸟的位移
            var offsetY = g * this.time * (this.time - offsetUp) / 2;

            for (var i = 0; i <= 2; i++) {
                this.birdsY[i] = this.y[i] + offsetY;
            }
            this.time++;

            _get(birds.prototype.__proto__ || Object.getPrototypeOf(birds.prototype), "draw", this).call(this, this.img, this.clippingX[this.index], this.clippingY[this.index], this.clippingWidth[this.index], this.clippingHeight[this.index], this.birdsX[this.index], this.birdsY[this.index], this.birdsWidth[this.index], this.birdsHeight[this.index]);
        }
    }]);

    return birds;
}(_sprite2.sprite);
//# sourceMappingURL=birds.js.map