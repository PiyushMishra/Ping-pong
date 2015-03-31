/**
 * script to be operated on canvas
 */

// canvas coordinates
var canvasHeight = 700;
var canvasWidth = 500;

//  ball coordinates
var ball_x = 350;
var ball_y = 250;
var radius = 12;

// ball displacement parameters 
var ball_x_displacement = 2;
var ball_y_displacement = 2;

// canvas
var canvasId = "canvas";
var ctx;

// first paddle coordinates
var firstPaddle_x = 0
var firstPaddle_y = 250

// second paddle coordinates
var secondPaddle_x = 350
var secondPaddle_y = 0

// function to repaint the whole canvas on events  
function updateCanvas() {
    ctx.clearRect(0, 0, 700, 500);
	var paddle = new Paddle(0, 200, 20, 100)
	var paddle = new Paddle(680, 200, 20, 100)
	moveBall()
}

// update ball position
function moveBall() {
	console.log(ball_y);
	var ball = new Ball(ball_x, ball_y, radius);

	if (ball_y + radius > canvasWidth) {
		ball_y_displacement = -ball_y_displacement;
	}

	if ((ball_x + radius > canvasHeight)) {
		ball_x_displacement = -ball_x_displacement;
	}

	if (ball_y - radius < 0) {
		ball_y_displacement = -ball_y_displacement;
	}

	if (ball_x - radius < 0) {
		ball_x_displacement = -ball_x_displacement;
	}

	ball_x += ball_x_displacement;
	ball_y += ball_y_displacement;
	return ball;
}

// create the ball class
function Ball(ball_x_position, ball_y_position, radius) {
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(ball_x_position, ball_y_position, radius, Math.PI * 2, false);
	ctx.fillStyle = "#C72129";
	ctx.closePath();
	ctx.fill();
}

// create the paddle class
function Paddle(paddle_x_position, paddle_y_position, width, height) {
	ctx.beginPath();
	ctx.rect(paddle_x_position, paddle_y_position, width, height);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.lineWidth = 7;
	ctx.strokeStyle = 'black';
	ctx.stroke();
}


// set interval to repaint canvas to put the illusion of ball movement	
function init() {
	var canvas = document.getElementById(canvasId);
	ctx = canvas.getContext("2d");
	var interval = setInterval(updateCanvas, 10);
}