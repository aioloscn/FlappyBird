'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataStore = require('./base/dataStore.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var director = exports.director = function () {
    _createClass(director, null, [{
        key: 'getInstance',
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
        this.moveSpeed = 2;
    }

    _createClass(director, [{
        key: 'run',
        value: function run() {
            var _this = this;

            this.dataStore.get('background').draw();
            this.dataStore.get('land').draw();
            var timer = requestAnimationFrame(function () {
                return _this.run();
            });
            this.dataStore.put('timer', timer);
            // cancelAnimationFrame(this.dataStore.get('timer'));
        }
    }]);

    return director;
}();
//# sourceMappingURL=director.js.map