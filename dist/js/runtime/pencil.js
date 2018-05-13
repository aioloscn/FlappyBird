"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pencil = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sprite2 = require("../base/sprite.js");

var _director = require("../director.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pencil = exports.pencil = function (_sprite) {
    _inherits(pencil, _sprite);

    function pencil(image, top) {
        _classCallCheck(this, pencil);

        var _this = _possibleConstructorReturn(this, (pencil.__proto__ || Object.getPrototypeOf(pencil)).call(this, image, 0, 0, image.width, image.height, window.innerWidth, 0, image.width, image.height));

        _this.top = top;
        return _this;
    }

    _createClass(pencil, [{
        key: "draw",
        value: function draw() {
            this.x = this.x - _director.director.getInstance().moveSpeed;
            _get(pencil.prototype.__proto__ || Object.getPrototypeOf(pencil.prototype), "draw", this).call(this, this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.img.width, this.img.height);
        }
    }]);

    return pencil;
}(_sprite2.sprite);
//# sourceMappingURL=pencil.js.map