require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function Mouse() {
	this.x = 0;
	this.y = 0;
}

Mouse.prototype = {
	update() {
		
	},
	draw() {
		
	}
};

module.exports = Mouse;
},{}],2:[function(require,module,exports){
"use strict";

function draw() {
	
}

module.exports = draw;
},{}],3:[function(require,module,exports){
"use strict";

var Mouse = require("../Game Objects/Mouse");

function init() {
	return {
		mouse: new Mouse()
	};
}

module.exports = init;
},{"../Game Objects/Mouse":1}],4:[function(require,module,exports){
"use strict";

function update(state) {
	
}

module.exports = update;
},{}],"Main":[function(require,module,exports){
"use strict";

var init = require("./Init");
var update = require("./Update");
var draw = require("./Draw");

function Main(_state) {
	var state;
	if(!_state) {
		state = init();
	} else {
		state = _state;
	}
	
	setInterval(() => {
		update(state);
		draw(state);
	}, 1000/60);
}

module.exports = Main;
},{"./Draw":2,"./Init":3,"./Update":4}]},{},[]);
