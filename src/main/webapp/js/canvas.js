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
var ball_x_displacement = 3;
var ball_y_displacement = 3;

// canvas
var canvasId = "canvas";
var ctx;
var interval;

// first paddle coordinates
var paddleHeight = 150
var paddleWidth = 20
var firstPaddle_x = 0
var firstPaddle_y = 200

// second paddle coordinates
var secondPaddle_x = canvasHeight - paddleWidth
var secondPaddle_y = 200

// paddle displacement 
var paddle_displacement = 40

// function to repaint the whole canvas on events  
function updateCanvas() {
	ctx.clearRect(paddleWidth, 0, canvasHeight - 2 * paddleWidth, canvasWidth);
	var paddle = new Paddle(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight)
	var paddle = new Paddle(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight)
	moveBall()
}

// update paddle positions

function upadteFirstPaddlePositionUp() {
	if (firstPaddle_y > paddle_displacement) {
		ctx.clearRect(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight);
		firstPaddle_y -= paddle_displacement
		var paddle = new Paddle(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight)
		console.log(firstPaddle_y)
	}
}

function upadteFirstPaddlePositionDown() {

	if (firstPaddle_y + paddleHeight <= (canvasWidth)) {
		ctx.clearRect(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight);
		firstPaddle_y += paddle_displacement
		var paddle = new Paddle(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight)

	}
}

function updateSecondPaddlePositionUp() {
	if (secondPaddle_y > paddle_displacement) {
		ctx.clearRect(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight);
		secondPaddle_y -= paddle_displacement
		var paddle = new Paddle(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight)

	}
}

function updateSecondPaddlePositionDown() {
	if (secondPaddle_y + paddleHeight <= (canvasWidth)) {
		ctx.clearRect(secondPaddle_x, (secondPaddle_y), paddleWidth, paddleHeight);
		secondPaddle_y += paddle_displacement
		var paddle = new Paddle(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight)

	}
}


// update ball position
function moveBall() {

	console.log(ball_y, ball_x);

	var ball = new Ball(ball_x, ball_y, radius);

	if ((ball_x + ball_x_displacement == firstPaddle_x + paddleWidth)) {
		if ((ball_y + radius >= firstPaddle_y) && (ball_y + radius <= firstPaddle_y + paddleHeight)) {
			console.log("touch", ball_y, ball_x)
			ball_x_displacement = -ball_x_displacement;
		}

	}

	if ((ball_x + ball_x_displacement == secondPaddle_x)) {
		if ((ball_y + radius >= secondPaddle_y) && (ball_y + radius <= secondPaddle_y + paddleHeight)) {
			console.log("touch", ball_y, ball_x)
			ball_x_displacement = -ball_x_displacement;
		}

	}

	if (ball_y + radius > canvasWidth) {
		ball_y_displacement = -ball_y_displacement;
		
	}

	if ((ball_x + radius > canvasHeight)) {
		
		clearInterval(interval)
		alert("game over")



	}

	if (ball_y - radius < 0) {
		ball_y_displacement = -ball_y_displacement;
	}

	if (ball_x - radius < 0) {
		alert("game over")
		clearInterval(interval)
		// ball_x_displacement = -ball_x_displacement;
	}

	ball_x += ball_x_displacement;
	ball_y += ball_y_displacement;
	return ball;
}

// create the ball class
function Ball(ball_x_position, ball_y_position, radius) {
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
	ctx.fillStyle = '#5A0E53';
	ctx.fill();
	ctx.lineWidth = 7;
	ctx.strokeStyle = 'black';
	ctx.stroke();
}

// dokeyDown function
function doKeyDown(e) {
	if (e.keyCode == 113) //Q
	{
		console.log("pressed Q");
		upadteFirstPaddlePositionDown()
	}

	if (e.keyCode == 119) //W
	{
		console.log("pressed W");
		upadteFirstPaddlePositionUp()
	}
	if (e.keyCode == 111) //O
	{
		console.log("pressed O");
		updateSecondPaddlePositionUp()
	}
	if (e.keyCode == 112) //P
	{
		console.log("pressed P");
		updateSecondPaddlePositionDown()
	}
}

function doMouseMove(e) {

	var canvas = document.getElementById(canvasId);
	var rect = canvas.getBoundingClientRect();
	var mouse_x = e.x - rect.left
	var mouse_y = e.y - rect.top


	console.log(mouse_x, mouse_y)
	if (mouse_x > canvasHeight / 2) {

		if (mouse_y > canvasWidth / 2) {
			console.log("right and down")
		} else {
			console.log("right and up")
		}

	} else {
		if (mouse_y > canvasWidth / 2) {
			console.log("left and down")
		} else {
			console.log("left and up")
		}

	}

}

// set interval to repaint canvas to put the illusion of ball movement	
function init() {
	var canvas = document.getElementById(canvasId);
	window.addEventListener("keypress", doKeyDown, true)
	canvas.addEventListener("mousemove", doMouseMove, true)
	ctx = canvas.getContext("2d");
	var paddle = new Paddle(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight)
	var paddle = new Paddle(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight)
	interval = setInterval(updateCanvas, 10);
}