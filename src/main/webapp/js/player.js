/**
 * this javascript class represnts player
 */

function Player(name, score) {
	this.name = name;
	this.score = score;
	this.getInfo = function() {
		return "name is :" + this.name + "and score is :" + this.score
	}
}

var player = new Player("piyush", 40)

function getPlayerInfo() {
	display(player)
}

function display(player) {
	document.write(player.getInfo())
}