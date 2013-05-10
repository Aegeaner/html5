var KEY = {
	UP: 38,
	DOWN: 40,
	W: 87,
	S: 83
}

var pingpong = {
	scoreA: 0,
	scoreB: 0
}
pingpong.pressedKeys = {}
pingpong.ball = {
	speed: 5,
	x: 150,
	y: 100,
	directionX: 1,
	directionY: 1
}

$(function() {
	pingpong.timer = setInterval(gameloop, 30);

	$(document).keydown(function(e) {
		pingpong.pressedKeys[e.which] = true;
	});
	$(document).keyup(function(e) {
		pingpong.pressedKeys[e.which] = false;
	});
});

function gameloop() {
	moveBall();
	movePaddles();
}

function moveBall() {
	var playgroundHeight = parseInt($("#playground").height());
	var playgroundWidth = parseInt($("#playground").width());
	var ball = pingpong.ball;

	if(ball.y + ball.speed * ball.directionY > playgroundHeight)
	{
		ball.directionY = -1;
	}

	if(ball.y + ball.speed * ball.directionY < 0)
	{
		ball.directionY = 1;
	}

	// 检测右边
	if(ball.x + ball.speed * ball.directionX > playgroundWidth)
	{
		// 玩家B丢分
		pingpong.scoreA++;
		$("#scoreA").html(pingpong.scoreA);

		ball.x = 250;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		});
		ball.directionX = -1;
	}

	// 检测左边
	if(ball.x + ball.speed * ball.directionX < 0)
	{
		// 玩家A丢分
		pingpong.scoreB++;
		$("#scoreB").html(pingpong.scoreB);

		ball.x = 150;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		});
		ball.directionX = 1;
	}

	ball.x += ball.speed * ball.directionX;
	ball.y += ball.speed * ball.directionY;

    // 检测左边球拍
	var paddleAX = parseInt($("#paddleA").css("left")) + parseInt($("#paddleA").css("width"));
	var paddleAYBottom = parseInt($("#paddleA").css("top")) + parseInt($("#paddleA").css("height"));
	var paddleAYTop = parseInt($("#paddleA").css("top"));

	if(ball.x + ball.speed * ball.directionX < paddleAX)
	{
		if(ball.y + ball.speed * ball.directionY <= paddleAYBottom
			&& ball.y + ball.speed * ball.directionY >= paddleAYTop)
		{
			ball.directionX = 1;
		}
	}

	// 检测右边球拍
	var paddleBX = parseInt($("#paddleB").css("left"));
	var paddleBYBottom = parseInt($("#paddleB").css("top")) + parseInt($("#paddleB").css("width"));
	var paddleBYTop = parseInt($("#paddleB").css("top"));

	if(ball.x + ball.speed * ball.directionX >= paddleBX)
	{
		if(ball.y + ball.speed * ball.directionY <= paddleBYBottom
			&& ball.y + ball.speed * ball.directionY >= paddleAYTop)
		{
			ball.directionX = -1;
		}
	}

	$("#ball").css({
		"left": ball.x,
		"top": ball.y
	});
}

function movePaddles() {
	if(pingpong.pressedKeys[KEY.UP]) {
		var top = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top", top-5);
	}
	if(pingpong.pressedKeys[KEY.DOWN]) {
		var top = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top", top+5);
	}
	if(pingpong.pressedKeys[KEY.W]) {
		var top = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top", top-5);
	}
	if(pingpong.pressedKeys[KEY.S]) {
		var top = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top", top+5);
	}
}