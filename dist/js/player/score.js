'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataStore = require('../base/dataStore.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var score = exports.score = function () {
    function score() {
        _classCallCheck(this, score);

        this.ctx = _dataStore.dataStore.getInstance().ctx;
        this.scoreNumber = 0;
        // 变量控制加分，只加一次
        this.isScore = true;
    }

    _createClass(score, [{
        key: 'draw',
        value: function draw() {
            this.ctx.font = '25px Arial';
            this.ctx.fillStyle = '#151e29';
            this.ctx.fillText(this.scoreNumber, window.innerWidth / 2, window.innerHeight / 18, 1000);
        }
    }]);

    return score;
}();
//# sourceMappingURL=score.js.map