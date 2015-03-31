/**
 * script to be operated on canvas
 */

var canvasHeight = 700
var canvasWidth = 500
var ball_x = 350
var ball_y = 250
var ball_x_displacement = 10
var ball_y_displacement = 10
var canvasId = "canvas"
var radius = 10


// update ball position
function moveBall() {
	clear()
	console.log(ball_y)
	var ball = new Ball(ball_x, ball_y, radius)

	if (ball_y + radius == canvasWidth) {
		ball_y_displacement = -ball_y_displacement
	}  

	if((ball_x + radius == canvasHeight))  {
		ball_x_displacement = -ball_x_displacement
	}

    if(ball_y -radius== 0)  {
		ball_y_displacement = -ball_y_displacement
	} 

	if(ball_x + radius == 0)  {
		ball_x_displacement = -ball_x_displacement		
	} 

	    ball_x += ball_x_displacement;
		ball_y += ball_y_displacement
	return ball
}

// clear 
function clear() {
	var canvas = document.getElementById(canvasId)
	var ctx = canvas.getContext("2d")
	ctx.clearRect(0, 0, 700, 500)
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


// set interval to repaint canvas to put the illusion of ball movement	
function init() {
	setInterval(moveBall(), 10)
}