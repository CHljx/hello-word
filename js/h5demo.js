/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventConstant = {
	Comments_Sended: 'commentSended',
	Favoriation_Sended: 'FavoriationSended'
};

var Event = function () {
	function Event() {
		_classCallCheck(this, Event);
	}

	_createClass(Event, null, [{
		key: 'on',
		value: function on(eventName, func) {
			$(document).on(eventName, func);
		}
	}, {
		key: 'trigger',
		value: function trigger(eventName, data) {
			$(document).trigger(eventName, data);
		}
	}, {
		key: 'off',
		value: function off(eventName, func) {
			$(document).off(eventName, func);
		}
	}, {
		key: 'EventConstant',
		get: function get() {
			return EventConstant;
		}
	}]);

	return Event;
}();

exports.default = Event;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: "prefixedEvent",
		value: function prefixedEvent(element, type, callback) {
			var pfx = ["webkit", "moz", "MS", "o", ""];
			for (var p = 0; p < pfx.length; p++) {
				if (!pfx[p]) type = type.toLowerCase();
				Util.addEvent(element, pfx[p] + type, callback);
			}
		}
	}, {
		key: "addEvent",
		value: function addEvent(ele, type, hander) {
			if (ele.addEventListener) {
				ele.addEventListener(type, hander, false);
			}
			if (ele.attachEvent) {
				ele.attachEvent('on' + type, hander);
			}
		}
	}, {
		key: "screenHeight",
		value: function screenHeight() {
			return document.documentElement.clientHeight || document.body.clientHeight || window.screen.height || window.innerHeight;
		}
	}]);

	return Util;
}();

exports.default = Util;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoplayer = __webpack_require__(6);

var _videoplayer2 = _interopRequireDefault(_videoplayer);

var _videolist = __webpack_require__(9);

var _videolist2 = _interopRequireDefault(_videolist);

var _comment = __webpack_require__(13);

var _comment2 = _interopRequireDefault(_comment);

var _favoriate = __webpack_require__(17);

var _favoriate2 = _interopRequireDefault(_favoriate);

var _commentsender = __webpack_require__(21);

var _commentsender2 = _interopRequireDefault(_commentsender);

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(24);
var comment, favoriate;
$(function () {
    var player = new _videoplayer2.default({
        id: 'J_prismPlayer',
        autoplay: true,
        isLive: false,

        playsinline: true,
        controlBarVisibility: 'hover',
        source: "//common.qupai.me/player/qupai.mp4",
        useH5Prism: true,
        useFlashPrism: false,
        x5_video_position: 'normal',
        //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放
        x5_type: 'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
        cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
    });
    var dataList = [{
        url: 'https://common.qupai.me/player/qupai.mp4',
        cover: 'images/cover1.png',
        title: "分享精彩生活"
    }, {
        url: 'http://player.alicdn.com/video/1.mp4',
        cover: 'images/cover2.png',
        title: "多力多滋"
    }, {
        url: 'http://player.alicdn.com/video/11.mp4',
        cover: 'images/cover3.png',
        title: "马云讲新零售"
    }];
    _videolist2.default.setup('videolist', dataList, player);
    _commentsender2.default.setup();
    var wrapper = $('.comment-list');
    comment = new _comment2.default(wrapper);
    favoriate = new _favoriate2.default(wrapper);
    $('.comment-textbox').show();

    var adjustLayout = function adjustLayout() {
        var offset = $('.ui-tab .ui-tab-nav').offset();
        var remainHeight = _util2.default.screenHeight() - offset.top - offset.height - $('.comment-textbox').height();
        $('.ui-tab-content').height(remainHeight);
        $('.comment-list .comment-container').css('max-height', remainHeight);
    };
    adjustLayout();
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(7);

var VideoPlayer = function () {
    function VideoPlayer(props) {
        _classCallCheck(this, VideoPlayer);

        this.player;
        this.props = props;
        this._setup();
        this._bindEvent();
        this._firstFullscreen = true;
    }

    _createClass(VideoPlayer, [{
        key: 'loadByUrl',
        value: function loadByUrl(url) {
            if (this.player) this.player.loadByUrl(url);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            if (this.player) {
                this.player.dispose();
                Zepto('#' + this.props.id).empty();
            }
        }
    }, {
        key: '_setup',
        value: function _setup() {
            this.player = new Aliplayer(this.props);
        }
    }, {
        key: '_bindEvent',
        value: function _bindEvent() {
            var that = this;
            this.player.on('ready', function (e) {
                console.log('ready');
            });

            this.player.on('play', function (e) {
                console.log('play');
            });

            this.player.on('ended', function (e) {
                console.log('ended');
            });
            this.player.on('pause', function (e) {
                console.log('pause');
            });

            // this.player.on('requestFullScreen', (e)=>{
            // 	    let video=$(that.player.tag);
            // 	    video.addClass('center');
            // });

            // this.player.on('x5cancelFullScreen',(e)=>{
            // 	let service = that.player.fullscreenService;
            // 	if(service.getIsFullScreen())
            // 	{
            // 		service.cancelFullScreen()
            // 	}
            //     $(that.player.el()).removeClass('enter-x5-player');

            // });

            // this.player.on('x5requestFullScreen',(e)=>{
            //     //调整视频的位置
            //     $(that.player.el()).addClass('enter-x5-player');
            //     var screenHeight = document.body.clientHeight*(window.devicePixelRatio||1)+ "px";
            //     that.player.tag.style.height = screenHeight;
            //     let video=$(that.player.tag);
            //     setTimeout(()=>{
            //         video.removeClass('x5-top-left');
            //     });
            // });
            // this.player.on('cancelFullScreen', (e)=>{
            // 	let video=$(that.player.tag);
            //     setTimeout(()=>{
            //         alert(video.length());
            //        video.removeClass('center');
            //        video.removeClass('x5-top-left');
            //     });
            // });
            //微信左上角退出按钮触发是，关闭页面
            this.player.tag.addEventListener("x5videoexitfullscreen", function () {
                if (WeixinJSBridge) WeixinJSBridge.call('closeWindow');else {
                    try {
                        window.location.refresh();
                    } catch (e) {}
                }
            });

            $(document).on('WeixinJSBridgeReady', function () {
                var video = $(that.player.el()).find('video')[0];
                video.play();
            });
        }
    }, {
        key: '_unbindEvent',
        value: function _unbindEvent() {
            var that = this;
            this.player.off('ready', function (e) {
                // 解决ios不自动播放的问题
                if ($.os.ios) that._autoPlay();
                console.log('ready');
            });

            this.player.off('play', function (e) {
                console.log('play');
            });

            this.player.off('ended', function (e) {
                console.log('ended');
            });
            this.player.off('pause', function (e) {
                console.log('pause');
            });
        }
    }]);

    return VideoPlayer;
}();

exports.default = VideoPlayer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".enter-x5-player video.center\n{\n\tobject-position:50% 50% !important;\n}\n\n.prism-progress-cursor \n{\n  margin-left:0px !important;\n}\n\n/*.enter-x5-player video\n{\n\tobject-position: 0px 10px;\n\t/*height:auto !important;*/\n\n/*}*/\n\n\nvideo::-webkit-media-controls {\n  display:none !important;\n}\n\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var itemHtml = __webpack_require__(10);
__webpack_require__(11);

var VideoList = function () {
	function VideoList() {
		_classCallCheck(this, VideoList);
	}

	_createClass(VideoList, null, [{
		key: 'setup',
		value: function setup(id, list, player) {
			var $wrapper = $('#' + id);
			list.forEach(function (item, index) {
				var $item = $(itemHtml),
				    $img = $item.find('img');
				$img.attr('src', item.cover);
				$img.attr('url', item.url);
				$item.find('p').text(item.title);
				$wrapper.append($item);
			});

			$wrapper.click(function (e) {
				var url = $(e.target).attr('url');
				if (url) {
					player.loadByUrl(url);
				}
			});
		}
	}]);

	return VideoList;
}();

exports.default = VideoList;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<li class='video-list-item'>\n  <img></img>\n  <p></p>\n</li>";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".video-list-wrapper\n{\n  margin-top: 0.266667rem;\n\tz-index:1000;\n}\n\n.video-list-wrapper .video-list\n{\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\tflex-wra:wrap;\n\t-ms-flex-pack:distribute;\n\t    justify-content:space-around;\n}\n\n.video-list .video-list-item\n{\n\twidth:30%;\n\theight:2.666667rem;\n\n}\n\n.video-list-item img\n{\n    width: 100%;\n    max-height: 2.666667rem;\n    border-radius: 0.026667rem;\n}\n\n.video-list-item img:hover\n{\n    opacity:0.8;\n    cursor: pointer;\n}\n\n.video-list-item p\n{\n\tmargin: 0;\n    font-size: 4px;\n}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _videocomments = __webpack_require__(14);

var _videocomments2 = _interopRequireDefault(_videocomments);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(15);

var CommentBuffer = function () {
	function CommentBuffer(wrapper, player) {
		var _this = this;

		_classCallCheck(this, CommentBuffer);

		this.comments = [];
		this._wrapper = wrapper;
		this.liveComment = new _videocomments2.default(wrapper, player);
		var that = this;
		_events2.default.on(_events2.default.EventConstant.Comments_Sended, function (e, data) {
			_this.add(data);
		});
	}

	_createClass(CommentBuffer, [{
		key: 'clear',
		value: function clear() {
			this.stop();
			this.liveComment.clear();
		}
	}, {
		key: 'add',
		value: function add(comment) {
			if (this.isStop) return;
			this.comments.push(comment);
			if (!this.isWorking) {
				this._wake();
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.comments = [];
			this.isWorking = false;
			this.isStop = true;
			clearInterval(this.interval);
		}
	}, {
		key: 'start',
		value: function start() {
			this.isStop = false;
		}
	}, {
		key: '_wake',
		value: function _wake() {
			this.isWorking = true;
			this.interval = setInterval(this._handle(), 500);
		}
	}, {
		key: '_handle',
		value: function _handle() {
			var that = this;
			return function () {
				if (that.comments.length > 0) {
					if (that.liveComment.isFull()) {
						that.liveComment.send("");
					}
					var comment = that.comments.shift();
					that.liveComment.send(comment);
					that._wrapper.scrollTop(that._wrapper[0].scrollHeight);
				} else {
					that.isWorking = false;
					clearInterval(that.interval);
				}
			};
		}
	}]);

	return CommentBuffer;
}();

exports.default = CommentBuffer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var comment_row_template = '<div class="comment-row"><span class="comment-left"></span><span class="comment-right"></div>';
var comment_step = 25;
var container_max_rows = 20;
var comment_name_colors = {
	'1': 'rgba(219,124,80,0.3)',
	'2': 'rgba(139,156,80,0.3)',
	'3': 'rgba(40,180,187,0.3)'
};

var VideoComments = function () {
	function VideoComments(wrapper) {
		_classCallCheck(this, VideoComments);

		this.createEl(wrapper);
		this._setupComment();
		this.maxTopRow = null;
		// let height = util.videoHeight($('.current-video')) - this.comments.height();
		// if (!util.isLargeScreen()) {
		// 	height = height - 80;
		// }
		// this.comments.css('top', height);
		this.colorIndex = 1;
	}

	_createClass(VideoComments, [{
		key: 'createEl',
		value: function createEl(wrapper) {
			this.comments = wrapper;
			this.container = this.comments.find('.comment-container');
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.comments.empty();
		}
	}, {
		key: 'isFull',
		value: function isFull() {
			return this.comments.find('.empty-comment-row').length == 0;
		}
	}, {
		key: 'send',
		value: function send(comment) {
			var emptyRows = this.comments.children('.comment-row'),
			    firstEmptyRow = void 0;

			if (!comment) {
				return;
			}

			if (emptyRows.length > 0) firstEmptyRow = $(emptyRows[0]);else firstEmptyRow = this._createEmptyRow();

			this._assignValues(firstEmptyRow, comment);

			this._move(firstEmptyRow);
		}
	}, {
		key: '_move',
		value: function _move(currentRow) {
			currentRow.show();
			var that = this,
			    commentsHeight = this.comments.height(),
			    containerHeight = this.container.height(),
			    step = currentRow.height();
			this.container.append(currentRow);
			var row = this.container.children().first();
			if (containerHeight - commentsHeight > row.height()) {
				this._removeClass(row.find('.comment-right'));
				row.hide();
				this.comments.append(row);
			}
		}
	}, {
		key: '_assignValues',
		value: function _assignValues(row, comment) {
			var name = row.find('.comment-left');
			name.text(comment.name);
			var commentRight = row.find('.comment-right');
			commentRight.html(comment.comment);
			commentRight.addClass(this._getClass());
		}
	}, {
		key: '_createEmptyRow',
		value: function _createEmptyRow() {
			var row = $(comment_row_template);
			row.hide();
			this.comments.append(row);
			return row;
		}
	}, {
		key: '_setupComment',
		value: function _setupComment() {
			for (var i = 0; i < container_max_rows; i++) {
				this._createEmptyRow();
			}
		}
	}, {
		key: '_getClass',
		value: function _getClass(type) {
			if (this.colorIndex > 4) {
				this.colorIndex = 1;
			}
			var className = 'comment-color' + this.colorIndex;
			this.colorIndex++;
			return className;
		}
	}, {
		key: '_removeClass',
		value: function _removeClass(ele) {
			ele.removeClass('comment-color1');
			ele.removeClass('comment-color2');
			ele.removeClass('comment-color3');
			ele.removeClass('comment-color4');
		}
	}]);

	return VideoComments;
}();

exports.default = VideoComments;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".content-container  li.comment-list {\n    height: 100%;\n    overflow: auto;\n    clear: both;\n    z-index: 500;\n    position: relative;\n}\n\n.comment-list .code-view\n{\n  position:absolute;\n  left:50%;\n  top:20px;\n  -ms-transform:translateX(-50%);\n      transform:translateX(-50%);\n}\n\n.comment-list .comment-container {\n    position: absolute;\n    height: auto;\n    width:60%;\n    bottom:0px;\n}\n\n.comment-container .comment-row\n{\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 0.106667rem;\n  position: relative;\n  text-shadow: 0 0.013333rem 0.013333rem #000000;\n  filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\n  margin-bottom:0.053333rem;\n  float: left;\n  clear: both;\n  padding-left: 0.133333rem;\n  padding-right: 0.133333rem;\n  margin-left: 0.133333rem;\n  margin-right: 0.133333rem;\n}\n\n.comment-row .comment-left\n{\n  color:#DBDBDB;\n  line-height: 0.8rem;\n  vertical-align: top;\n}\n\nhtml[data-dpr=\"1\"] .comment-row .comment-left\n{\n  font-size:14px;\n}\n\nhtml[data-dpr=\"2\"] .comment-row .comment-left\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .comment-row .comment-left{\n  font-size: 42px;\n}\n\n@media all and (min-device-width:980px)\n{\n  .comment-row .comment-left\n  {\n    font-size: 28px;\n  }\n}\n\n\n\n.comment-row .comment-right\n{\n  line-height: 0.8rem;\n  margin-left:0.133333rem;\n}\n\n\nhtml[data-dpr=\"1\"] .comment-row .comment-right\n{\n  font-size:14px;\n}\n\nhtml[data-dpr=\"2\"] .comment-row .comment-right\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .comment-row .comment-right{\n  font-size: 42px;\n}\n\n@media all and (min-device-width:980px)\n{\n  .comment-row .comment-right\n  {\n    font-size: 28px;\n  }\n}\n\n.comment-color1\n{\n  color: rgba(255, 216, 142, 1);\n}\n\n.comment-color2\n{\n  color: rgba(205, 243, 249, 1);\n}\n\n.comment-color3\n{\n  color: rgba(182, 159, 255, 1);\n}\n\n.comment-color4\n{\n  color: rgba(255, 255, 255, 1);\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(18);
var html = __webpack_require__(20);

var Favoriate = function () {
	function Favoriate(wrapper) {
		var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png'];

		_classCallCheck(this, Favoriate);

		this.animateContainer = $(html);
		wrapper.append(this.animateContainer);
		this.imgNames = images;
		this.index = 0;
		var that = this;
		_events2.default.on(_events2.default.EventConstant.Favoriation_Sended, function () {
			that.favoriate();
		});
	}

	_createClass(Favoriate, [{
		key: 'favoriate',
		value: function favoriate() {
			var length = this.imgNames.length;
			this.index = this.index < length ? this.index : 0;
			name = this.imgNames[this.index];
			var $img = $('<img src="./images/' + name + '" class="favorite-animation">');
			this.animateContainer.append($img);
			this.index++;
			_util2.default.prefixedEvent($img[0], 'animationend', function () {
				$img.remove();
			});
		}
	}]);

	return Favoriate;
}();

exports.default = Favoriate;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".favorite-animation-container\n{\n\tright: 0%;\n  bottom: .5rem;\n  height: 90%;\n\twidth:2.4rem;\n  margin-left: 0.133333rem;\n\tposition:absolute;\n}\n\n\n.favorite-animation-container img\n{\n\tposition:absolute;\n\tbottom:0px;\n  left:45%;\n}\n\n.favorite-animation\n{\n  animation-name: appear-from-bottom;\n  animation-duration: 2s;\n  animation-fill-mode:forwards;\n  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n}\n/*easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);*/\n\n@keyframes appear-from-bottom {\n  0% {\n    opacity: 0.5;\n    width:0.56rem;\n    height:0.533333rem;\n    display:block;\n  }\n  10% {\n    opacity: 1;\n  }\n  20%{\n    width:1.12rem;\n    height:1.066667rem;\n  }\n  66% {\n    opacity: 1;\n  }\n  100% {\n  \t/*900*/\n    transform: translateY(-5.6rem);\n    opacity: 0;\n    width:0.56rem;\n    height:0.533333rem;\n    display:none;\n  }\n}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorite-animation-container\">\n</div>";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(22);

var CommentSender = function () {
	function CommentSender() {
		_classCallCheck(this, CommentSender);
	}

	_createClass(CommentSender, null, [{
		key: 'setup',
		value: function setup() {
			$('.comment-textbox .send-btn').click(function () {
				var $text = $('.comment-textbox .send-txt');
				var msg = $text.val();
				_events2.default.trigger(_events2.default.EventConstant.Comments_Sended, {
					name: '小鱼儿',
					comment: msg
				});
				$text.val("");
			});
			$('.comment-textbox .favoriate-send').click(function () {
				_events2.default.trigger(_events2.default.EventConstant.Favoriation_Sended);
			});
		}
	}]);

	return CommentSender;
}();

exports.default = CommentSender;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".comment-textbox{\n    height:0.933333rem;\n    position: fixed;\n    bottom: 0px;\n    margin-left: 0.133333rem;\n    margin-right:0.133333rem;\n    margin-bottom: 0.066667rem;\n    width: 100%;\n    display:none;\n }\n .comment-textbox .send-container{\n      position: relative;\n      width: 100%;\n }\n.send-container .send-txt{\n\t    float:left;\n        width:68%;\n        height:0.933333rem;\n        line-height: 0.933333rem;\n        background:#fff;\n        border:0;\n        border-radius: 0.106667rem 0 0 0.106667rem;\n        resize : none;\n        color:#000;\n}\n\n.send-container .send-btn{\n      float:left;\n      width:15%;\n      height:0.933333rem;\n      background: #343B59;\n      line-height: 0.933333rem;\n      text-align: center;\n      border-radius: 0 0.106667rem 0.106667rem 0;\n      cursor: pointer;\n      color: #ffffff;\n      padding-right: 0.133333rem;\n      padding-left: 0.133333rem;\n}\n\n.send-container .send-btn:hover\n{\n    background: #343445;\n}\n\n.send-container .favoriate-send\n{\n  width:1rem;\n  height:1rem;\n  margin-left: 0.133333rem;\n  margin-right: 0.266667rem;\n}\n\n.send-container .favoriate-send:hover\n{\n  opacity: 0.8;\n  cursor:pointer;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "html,\nbody\n{\n  height: 100%;\n\tmargin:0;\n\tpadding:0;\n}\n\nbody\n{\n  font-size:16px !important;\n}\n\nul\n{\n\tpadding:0px;\n\tmargin:0px;\n}\n\nul li\n{\n    list-style-type:none;\n}\n\n.player-area\n{\n}\n\n.content-container\n{\n\tposition:absolute;\n\ttop:252px;\n}\n\n\n\n\n", ""]);

// exports


/***/ })
/******/ ]);