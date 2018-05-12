"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.background = undefined;

var _sprite2 = require("../base/sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var background = exports.background = function (_sprite) {
    _inherits(background, _sprite);

    function background() {
        _classCallCheck(this, background);

        var image = _sprite2.sprite.getImage('background');
        return _possibleConstructorReturn(this, (background.__proto__ || Object.getPrototypeOf(background)).call(this, image, 0, 0, image.width, image.height, 0, 0, window.innerWidth, window.innerHeight));
    }

    return background;
}(_sprite2.sprite);
//# sourceMappingURL=background.js.map