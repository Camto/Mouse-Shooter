"use strict";

var init = import("./Init");
var update = import("./Update");
var draw = import("./Draw");

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