const Bone_White = "#FFF8E8";
function Trans_Bone_White(alpha) {
	
	return "rgba(255, 248, 232, " + alpha + ")";
	
}
const Charcoal = "#282828";

function map_x_to_y(val, min1, max1, min2, max2) {
	
	return (((val - min1) / (max1 - min1)) * (max2 - min2)) + min2;
	
}

// the following is an modified version of paulirish's (http://paulirish.com/) method of cross browser window.requestAnimationFrame

if (!window.requestAnimationFrame) {
	
	window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element ) {window.setTimeout(callback, 50/3)}
	
}