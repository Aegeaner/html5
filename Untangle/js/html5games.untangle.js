$(function() {
	var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgba(200, 200, 100, .6)";
	
	// 绘制下半圆
	ctx.beginPath();
	ctx.arc(100, 110, 50, 0, Math.PI);
	ctx.closePath();
	ctx.fill();

	// 绘制上半圆
	ctx.beginPath();
	ctx.arc(100, 90, 50, 0, Math.PI, true);
	ctx.closePath();
	ctx.fill();

	// 绘制左半圆
	ctx.beginPath();
	ctx.arc(230, 100, 50, Math.PI/2, Math.PI*3/2);
	ctx.closePath();
	ctx.fill();

	// 绘制右半圆
	ctx.beginPath();
	ctx.arc(250, 100, 50, Math.PI*3/2, Math.PI/2);
	ctx.closePath();
	ctx.fill();

	// 绘制一个接近圆的形状
	ctx.beginPath();
	ctx.arc(180, 240, 50, Math.PI*7/6, Math.PI*2/3);
	ctx.closePath();
	ctx.fill();

	// 绘制一小段圆弧
	ctx.beginPath();
	ctx.arc(150, 250, 50, Math.PI*7/6, Math.PI*2/3, true);
	ctx.closePath();
	ctx.fill();
});