'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
}

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var param = function param(obj) {
    // encodeURIComponent
    return _underscore2['default'].map(obj, function (v, k) {
        return [encodeURIComponent(k), '=', encodeURIComponent(v)].join('');
    }).join('&').replace(/%20/g, "+");
};

exports['default'] = param;
module.exports = exports['default'];