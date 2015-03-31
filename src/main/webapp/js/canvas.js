/**
 * script to be operated on canvas
 */

var ball_x = 350
var ball_y = 480
var ball_x_displacement = 2
var ball_y_displacement = 2
var canvasId = "canvas"
var radius = 10

// draw image
function drawImage(canvasId) {
	var ball = new Ball(ball_x, ball_y, radius)
}


f

// create the ball class
function Ball(ball_x_position, ball_y_position, radius) {
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	ctx.beginPath()
	ctx.arc(ball_x_position, ball_y_position, radius, Math.PI * 2, false)
	ctx.closePath()
	ctx.fill()
}