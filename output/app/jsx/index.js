(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

var Toast = exports.Toast = (function () {
    function Toast(options) {
        _classCallCheck(this, Toast);

        this.options = options;
        this.initDom();
        this.initEvents();
        this.hidden = true;
    }

    _prototypeProperties(Toast, null, {
        show: {
            value: function show() {
                this.hidden = false;
                this.main.show();
            },
            writable: true,
            configurable: true
        },
        hide: {
            value: function hide() {
                this.hidden = true;
                this.main.hide();
            },
            writable: true,
            configurable: true
        },
        html: {
            value: function html(text) {
                this.main.html(text);
            },
            writable: true,
            configurable: true
        },
        initDom: {
            value: function initDom() {
                var me = this;
                var main = $("" + "<div class=\"toast\">" + "</div>");

                main.addClass("toast-" + me.options.skin);

                $(document.body).append(main);

                me.main = main;
            },
            writable: true,
            configurable: true
        },
        setSkin: {
            value: function setSkin(skin) {
                this.main.addClass("toast-" + skin);
            },
            writable: true,
            configurable: true
        },
        initEvents: {
            value: function initEvents() {},
            writable: true,
            configurable: true
        }
    });

    return Toast;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],2:[function(require,module,exports){
"use strict";

/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

var Toast = require("../component/Toast/Toast").Toast;
var Text = require("../widget/Test/Test.jsx").Text;
var Photo = require("../widget/Photo/Photo.jsx").Photo;


ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Text, null),
  React.createElement(Photo, null)
), document.getElementById("app-index"));

},{"../component/Toast/Toast":1,"../widget/Photo/Photo.jsx":3,"../widget/Test/Test.jsx":4}],3:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * @file
 * @author jinguangguo
 * @date 2016/1/15
 */

var Photo = exports.Photo = (function (_React$Component) {
    function Photo() {
        _classCallCheck(this, Photo);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Photo, _React$Component);

    _prototypeProperties(Photo, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("i", { className: "icon icon-location" }),
                    React.createElement("img", { src: "./img/a-bg.png" })
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Photo;
})(React.Component);
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],4:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * @file
 * @author jinguangguo
 * @date 2016/1/15
 */

var TEXTS = [{
    id: 1,
    txt: "文本1"
}, {
    id: 2,
    txt: "文本2"
}];

var Text = exports.Text = (function (_React$Component) {
    function Text() {
        _classCallCheck(this, Text);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Text, _React$Component);

    _prototypeProperties(Text, null, {
        render: {
            value: function render() {
                var items = [];

                TEXTS.map(function (text, index) {
                    items.push(React.createElement(
                        "li",
                        { className: "item", key: text.id },
                        React.createElement(
                            "a",
                            { href: "javascript:;", title: text.txt, className: "item-link" },
                            text.txt
                        )
                    ));
                });

                return React.createElement(
                    "ul",
                    { className: "widget-show-text" },
                    items
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Text;
})(React.Component);
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}]},{},[2]);
