Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen


	// load everything
	game.load.image('background', 'assets/img/background.png');
	game.load.spritesheet('title', 'assets/img/title.png', 587, 110, 3);

	game.load.image('paddle', 'assets/img/paddle.png');
	game.load.image('ball-beige', 'assets/img/ball-beige.png');
	game.load.image('ball-purple', 'assets/img/ball-purple.png');

	game.load.audio('music', 'assets/aud/Super\ Friendly.mp3');
	game.load.audio('die', 'assets/aud/die.wav');
	game.load.audio('hit-beige', 'assets/aud/hit1.wav');
	game.load.audio('hit-purple', 'assets/aud/hit2.wav');

	A.music = game.add.sound('music');
	A.sounds = {
	    die: game.add.sound('die'),
	    hit: {
		beige: game.add.sound('hit-beige'),
		purple: game.add.sound('hit-purple'),
	    },
	};
    },

    create: function () {
	game.state.start('Menu');
    }
};
