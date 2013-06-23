var audiogame = {};

$(function() {
	audiogame.buttonOverSound = document.getElementById("buttonover");
	audiogame.buttonOverSound.volume = 0.3;
	audiogame.buttonActiveSound = document.getElementById("buttonactive");
	audiogame.buttonActiveSound.volumen = 0.3;

	$("a[href='#game']")
	.hover(function() {
		audiogame.buttonOverSound.currentTime = 0;
		audiogame.buttonOverSound.play();
	}, function() {
		audiogame.buttonOverSound.pause();
	})
	.click(function() {
		audiogame.buttonActiveSound.currentTime = 0;
		audiogame.buttonActiveSound.play();

		return false;
	});

	drawBackground();
});

function drawBackground()
{
	var game = document.getElementById("game-background-canvas");
	var ctx = game.getContext("2d");

	ctx.lineWidth = 10;
	ctx.strokeStyle = "#000";

	var center = game.width / 2;

	// 绘制三条竖线
	ctx.beginPath();
	ctx.moveTo(center-100, 50);
	ctx.lineTo(center-100, game.height-50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(center, 50);
	ctx.lineTo(center, game.height-50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(center+100, 50);
	ctx.lineTo(center+100, game.height-50);
	ctx.stroke();

	// 绘制横线
	ctx.beginPath();
	ctx.moveTo(center-150, game.height-80);
	ctx.lineTo(center+150, game.height-80);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(50, 50, 50, .8)";
	ctx.stroke();
}