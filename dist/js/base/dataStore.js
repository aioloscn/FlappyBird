'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 变量缓存器，方便我们在不同的类中访问和修改变量
var dataStore = exports.dataStore = function () {
    _createClass(dataStore, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!dataStore.instance) dataStore.instance = new dataStore();
            return dataStore.instance;
        }
    }]);

    function dataStore() {
        _classCallCheck(this, dataStore);

        this.map = new Map();
    }

    _createClass(dataStore, [{
        key: 'put',
        value: function put(key, value) {
            if (typeof value === 'function') {
                value = new value();
            }
            this.map.set(key, value);
            return this;
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.map.get(key);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    value = null;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return dataStore;
}();
//# sourceMappingURL=dataStore.js.map