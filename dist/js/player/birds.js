"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.birds = undefined;

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
        _this.birdX = window.innerWidth / 4;
        _this.birdsX = [_this.birdX, _this.birdx, _this.birdX];
        _this.birdY = window.innerHeight / 2;
        _this.birdsY = [_this.birdY, _this.birdY, _this.birdY];
        _this.birdWidth = 34;
        _this.birdsWidth = [_this.birdWidth, _this.birdWidth, _this.birdWidth];
        _this.birdHeight = 24;
        _this.birdsHeight = [_this.birdHeight, _this.birdHeight, _this.birdHeight];
        _this.y = [_this.birdY, _this.birdY, _this.birdY];
        _this.index = 0;
        _this.count = 0;
        _this.time = 0;
        return _this;
    }

    return birds;
}(_sprite2.sprite);
//# sourceMappingURL=birds.js.map