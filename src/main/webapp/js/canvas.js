/**
 * script to be operated on canvas
 */

// get element by id
function getElement(elementId) {
	return document.getElementById(elementId)
}

// set image in canvas
function setImageInCanvas(canvas) {
    var canvasContext = canvas.getContext("2d")
	var image = new Image()
	image.setAttribute("src", "images/tball.jpeg")
	image.setAttribute("width", "1px")
	image.setAttribute("height", "10px")
	image.setAttribute("size", "10")
	image.setAttribute("class", "canvas")
	canvasContext.drawImage(image, 320, 50)
}

// draw image
function drawImage(canvasId) {
	var canvas = getElement(canvasId)
    setImageInCanvas(canvas)
}
