"use strict";

var Mouse = require("../Game Objects/Mouse");

function init() {
	return {
		mouse: new Mouse()
	};
}

module.exports = init;