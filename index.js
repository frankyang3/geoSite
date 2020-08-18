//adapted from https://3dtransforms.desandro.com/cube




var w = window.innerWidth/2
var h = window.innerHeight/2;


var lastMouseX = w,
	lastMouseY = h;
var rotX = 0,
	rotY = 0;

	$( document ).ready(function() {
	lastMouseX = w;
	lastMouseY = h;
	console.log("move")
	$(document).on("mousemove", mouseMoved);
});

function mouseMoved(ev) {
	var deltaX = ev.pageX - lastMouseX;
	var deltaY = ev.pageY - lastMouseY;

	lastMouseX = ev.pageX;
	lastMouseY = ev.pageY;

	rotY -= deltaX * 0.1;
	rotX += deltaY * 0.1;

	$("#cube").css("transform", "translateZ( -100px) rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");
}