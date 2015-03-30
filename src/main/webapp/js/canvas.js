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
	canvasContext.beginPath()
    canvasContext.arc(350,480,10,Math.PI*2,false)
    canvasContext.closePath()
    canvasContext.fill()
}

// draw image
function drawImage(canvasId) {
	var canvas = getElement(canvasId)
    setImageInCanvas(canvas)
}
