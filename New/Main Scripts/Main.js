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