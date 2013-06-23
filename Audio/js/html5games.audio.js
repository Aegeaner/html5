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
});