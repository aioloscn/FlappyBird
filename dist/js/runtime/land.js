"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.land = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sprite2 = require("../base/sprite.js");

var _director = require("../director.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var land = exports.land = function (_sprite) {
    _inherits(land, _sprite);

    function land() {
        _classCallCheck(this, land);

        var image = _sprite2.sprite.getImage('land');

        // 地板的水平变化坐标
        var _this = _possibleConstructorReturn(this, (land.__proto__ || Object.getPrototypeOf(land)).call(this, image, 0, 0, image.width, image.height, 0, window.innerHeight - image.height, image.width, image.height));

        _this.landX = 0;
        // 地板的移动速度
        _this.landSpeed = _director.director.getInstance().moveSpeed;
        return _this;
    }

    _createClass(land, [{
        key: "draw",
        value: function draw() {
            this.landX = this.landX + this.landSpeed;
            if (this.landX > this.img.width - window.innerWidth) this.landX = 0;
            _get(land.prototype.__proto__ || Object.getPrototypeOf(land.prototype), "draw", this).call(this, this.img, this.srcX, this.srcY, this.srcW, this.srcH, -this.landX, this.y, this.width, this.height);
        }
    }]);

    return land;
}(_sprite2.sprite);
//# sourceMappingURL=land.js.map