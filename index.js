//adapted from https://3dtransforms.desandro.com/cube

var lastMouseX = 0,
	lastMouseY = 0;
var rotX = 0,
	rotY = 0;

$(document).on("mousemove", function(ev) {
	lastMouseX = ev.clientX;
    lastMouseY = ev.clientY;
    //console.log(ev.clientX)
	$(document).on("mousemove", mouseMoved);
});


$(document).on("mouseup", function() {
    console.log("mouseUp")
	$(document).off("mousemove", mouseMoved);
});


function mouseMoved(ev) {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var deltaX = w/2 - lastMouseX;
    var deltaY = h/2 - lastMouseY;
    
    //console.log("mouseMoved" + deltaX + " lastMouseX" + lastMouseX + ev.pageX)
	lastMouseX = ev.pageX;
	lastMouseY = ev.pageY;

	rotY -= deltaX * 0.000001;
	rotX += deltaY * 0.000001;

	$("#cube").css("transform", "translateZ( -100px) rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");
}

