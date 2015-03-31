/**
 * script to be operated on canvas
 */

var ball_x = 350
var ball_y = 480
var ball_x_displacement = 20
var ball_y_displacement = 20
var canvasId = "canvas"
var radius = 10


// draw image
function drawImage(ball_x_position, ball_y_position) {
    v
	var ball = new Ball(ball_x_position, ball_y_position, radius)
	
}

//loop draw
function drawImages() {
for (var i = 0; i < 10; i++) {
	var ball = new Ball(ball_x + ball_x_displacement*i, ball_y - ball_y_displacement*i,10)
}
}


// create the ball class
function Ball(ball_x_position, ball_y_position, radius) {
	var canvas = document.getElementById(canvasId)
	var ctx = canvas.getContext("2d")
	ctx.beginPath()
	ctx.arc(ball_x_position, ball_y_position, radius, Math.PI * 2, false)
	ctx.closePath()
	ctx.fill()
}