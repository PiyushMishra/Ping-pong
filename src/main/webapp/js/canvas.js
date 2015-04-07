/**
 * script to be operated on canvas
 */

// canvas coordinates
var canvasHeight
var canvasWidth

//  ball coordinates	
var ball_x
var ball_y
var radius

// ball displacement parameters 
var ball_x_displacement
var ball_y_displacement

// canvas
var canvasId
var ctx;
var interval;

// first paddle coordinates
var paddleHeight
var paddleWidth
var firstPaddle_x
var firstPaddle_y

// second paddle coordinates
var secondPaddle_x
var secondPaddle_y

// paddle displacement 
var paddle_displacement

var qDown
var wDown
var oDown
var pDown

// player score
var fscore
var sscore

var oldMouse_y

// function to repaint the whole canvas on events  
function updateCanvas() {
	ctx.clearRect(0, 0, canvasHeight, canvasWidth);
	upadteFirstPaddlePositionUp()
	upadteFirstPaddlePositionDown()
	updateSecondPaddlePositionUp()
	updateSecondPaddlePositionDown()
	var paddle = new Paddle(firstPaddle_x, firstPaddle_y, paddleWidth, paddleHeight)
	var paddle = new Paddle(secondPaddle_x, secondPaddle_y, paddleWidth, paddleHeight)
	drawText("score " + fscore, 30, 30)
	drawText("score " + sscore, canvasHeight - 90, 30)
	moveBall()
}

// update paddle positions

function upadteFirstPaddlePositionUp() {
	if (firstPaddle_y > paddle_displacement) {
		if (qDown == true) {
			firstPaddle_y -= paddle_displacement
		}
	}
}

function upadteFirstPaddlePositionDown() {
	if (firstPaddle_y + paddleHeight <= (canvasWidth)) {
		if (wDown == true) {
			firstPaddle_y += paddle_displacement
		}
	}
}

function updateSecondPaddlePositionUp() {
	if (secondPaddle_y > paddle_displacement) {
		if (oDown == true) {
			secondPaddle_y -= paddle_displacement
		}
	}
}

function updateSecondPaddlePositionDown() {
	if (secondPaddle_y + paddleHeight <= (canvasWidth)) {
		if (pDown == true) {
			secondPaddle_y += paddle_displacement
		}
	}
}


// update ball position
function moveBall() {
	console.log(ball_y, ball_x);

	if ((ball_y >= firstPaddle_y) && (ball_y <= firstPaddle_y + paddleHeight)) {
		if (ball_x - radius < firstPaddle_x + paddleWidth) {
			fscore += 100
			if (fscore % 200 == 0) {
				ball_x_displacement -= 1
			}
			console.log("touch", ball_y, ball_x)
			ball_x_displacement = -ball_x_displacement;
		}

	}
	if ((ball_y >= secondPaddle_y) && (ball_y <= secondPaddle_y + paddleHeight)) {
		if (ball_x + radius > secondPaddle_x) {
			sscore += 100
			if (sscore % 200 == 0) {
				ball_x_displacement += 1
			}
			console.log("touch", ball_y, ball_x)
			ball_x_displacement = -ball_x_displacement;
		}

	}

	if ((ball_y + radius > canvasWidth) || (ball_y - radius < 0)) {
		ball_y_displacement = -ball_y_displacement;
	}

	if ((ball_x + radius > canvasHeight) || (ball_x - radius < 0)) {
		clearInterval(interval)
		drawText("Game Over", 300, canvasWidth / 2)
	}


	var ball = new Ball(ball_x, ball_y, radius);
	ball_x += ball_x_displacement;
	ball_y += ball_y_displacement;
	return ball;
}

// create the ball class
function Ball(ball_x_position, ball_y_position, radius) {
	ctx.beginPath();
	ctx.arc(ball_x_position, ball_y_position, radius, Math.PI * 2, false);
	ctx.fillStyle = "#FFFFFF";
	ctx.closePath();
	ctx.fill();
}

// create the paddle class
function Paddle(paddle_x_position, paddle_y_position, width, height) {
	ctx.beginPath();
	ctx.rect(paddle_x_position, paddle_y_position, width, height);
	ctx.fillStyle = '#A000EC';
	ctx.fill();
	ctx.lineWidth = 7;
	ctx.strokeStyle = 'white';
	ctx.stroke();
}

function drawText(text, x, y) {
	ctx.fillStyle = "yellow";
	ctx.font = "bold 16px Arial";
	ctx.fillText(text, x, y);
}

// dokeyDown function
function doKeyDown(e) {
	if (e.keyCode == 90) //Q
	{
		console.log("pressed Q");
		qDown = true
	}

	if (e.keyCode == 88) //W
	{
		console.log("pressed W");
		wDown = true
	}
	if (e.keyCode == 38) //O
	{
		console.log("pressed O");
		oDown = true
	}
	if (e.keyCode == 40) //P
	{
		console.log("pressed P");
		pDown = true
	}
}

// dokeyUp function
function doKeyUp(e) {
	if (e.keyCode == 90) //Q
	{
		console.log("Q up");
		qDown = false
	}

	if (e.keyCode == 88) //W
	{
		console.log("W up")
		wDown = false
	}
	if (e.keyCode == 38) //O
	{
		console.log("O up");
		oDown = false
	}
	if (e.keyCode == 40) //P
	{
		console.log("P up");
		pDown = false
	}
}

function doMouseMove(e) {

	var canvas = document.getElementById(canvasId);
	var rect = canvas.getBoundingClientRect();
	var mouse_x = e.x - rect.left
	var mouse_y = e.y - rect.top

	if (mouse_x > canvasHeight / 2) {
		if (mouse_y + paddleHeight < canvasWidth) {
			secondPaddle_y = mouse_y
		}
	} else {
		if (mouse_y + paddleHeight < canvasWidth) {
			firstPaddle_y = mouse_y
		}

	}

}

// set interval to repaint canvas to put the illusion of ball movement	
function init() {

	oldMouse_y = 0

	fscore = 0
	sscore = 0

	canvasHeight = 700;
	canvasWidth = 500;

	//  ball coordinates	
	ball_x = canvasHeight / 2;
	ball_y = canvasWidth / 2;
	radius = 9;

	// ball displacement parameters 
	ball_x_displacement = 3;
	ball_y_displacement = 3;

	// canvas
	canvasId = "canvas";

	interval;

	// first paddle coordinates
	paddleHeight = 150
	paddleWidth = 20
	firstPaddle_x = 0
	firstPaddle_y = 200

	// second paddle coordinates
	secondPaddle_x = canvasHeight - paddleWidth
	secondPaddle_y = 200

	// paddle displacement 
	paddle_displacement = 5

	qDown = false
	wDown = false
	oDown = false
	pDown = false
	canvas = document.getElementById(canvasId);
	window.addEventListener("keydown", doKeyDown, true)
	window.addEventListener("keyup", doKeyUp, true)
	canvas.addEventListener("mousemove", doMouseMove, true)
	ctx = canvas.getContext("2d");
	interval = setInterval(updateCanvas, 10);
}