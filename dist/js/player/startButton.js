"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startButton = undefined;

var _sprite2 = require("../base/sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startButton = exports.startButton = function (_sprite) {
    _inherits(startButton, _sprite);

    function startButton() {
        _classCallCheck(this, startButton);

        var image = _sprite2.sprite.getImage('startButton');
        return _possibleConstructorReturn(this, (startButton.__proto__ || Object.getPrototypeOf(startButton)).call(this, image, 0, 0, image.width, image.height, (window.innerWidth - image.width) / 2, (window.innerHeight - image.height) / 2.5, image.width, image.height));
    }

    return startButton;
}(_sprite2.sprite);
//# sourceMappingURL=startButton.js.map