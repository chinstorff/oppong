Game.Menu = function (game) { };

Game.Menu.prototype = {
    create: function () {
	A.background = game.add.sprite(-382, 0, 'background');

	A.title = game.add.sprite(5, 5, 'title', 0);
	A.title.alpha = 0;
	game.add.tween(A.title).to({ alpha: 1 }, 600, null, true, 250, 0, false);

	A.paddle = {};
	if (A.score) {
	    A.paddle = game.add.sprite(218, 61, 'paddle');
	    A.paddle.anchor.setTo(0.5, 0.5);
	}

	A.keys = game.input.keyboard.createCursorKeys();
	A.keys.up.onDown.add(this.endMenu, this);

	this.createText();

	A.timer = 0;
    },

    update: function () {
	if (A.timer && game.time.now - A.timer > 1750) {
	    A.timer = 0;
	    game.state.start('Play');
	}
    },

    createText: function () {
	var w = A.w - 13;
	A.text = {};

	A.text.by = game.add.text(w, 111, 'by Christopher Hinstorff', { font: '33px Arial', fill: A.color.purple });
	A.text.controls = game.add.text(w, 150, 'arrow keys to move', { font: '26px Arial', fill: A.color.purple });
	A.text.begin = game.add.text(w, 180, 'press UP to begin',  { font: '30px Arial', fill: A.color.purple });
	A.text.mute = game.add.text(w, 210, 'press M to mute',  { font: '24px Arial', fill: A.color.purple });
	A.text.attr = game.add.text(w, A.h - 1, 'music: "Super Friendly" by Kevin Macleod (incompetech.com)',  { font: '10px Arial', fill: A.color.purple });
	A.text.attr.anchor.y = 1;

	for (text in A.text) {
	    A.text[text].anchor.x = 1;
	    A.text[text].alpha = 0;
	}

	game.add.tween(A.text.by).to({ alpha: 1 }, 300, null, true, 850, 0, false);
	game.add.tween(A.text.controls).to({ alpha: 1 }, 300, null, true, 1150, 0, false);
	game.add.tween(A.text.begin).to({ alpha: 1 }, 300, null, true, 1450, 0, false);
	game.add.tween(A.text.mute).to({ alpha: 1 }, 300, null, true, 1750, 0, false);
	game.add.tween(A.text.attr).to({ alpha: 1 }, 300, null, true, 2050, 0, false);
    },

    shiftTween: function (object) {
	game.add.tween(object)
	    .to({ x: object.x -205 }, 300, null, true, 0, 0, false)
	    .to({ frame: 1 }, 1, null, true, 0, 0, false)
	    .to({ x: object.x + 369 }, 600, null, true, 200, 0, false)
	    .to({ frame: 2 }, 1, null, true, 0, 0, false)
	    .to({ x: object.x + 82 }, 400, null, true, 200, 0, false);
    },

    endMenu: function () {
	if (!A.timer) {
	    A.paddle.alpha = 0;
	    this.shiftTween(A.title);
	    this.shiftTween(A.background);
	    for (text in A.text) {
		game.add.tween(A.text[text]).to({ alpha: 0 }, 1, null, true, 1200, 0, false);
	    }

	    A.timer = game.time.now;

	    if (A.audio) {
		A.music.play('', 0, 0.7, true, true);
	    }
	}
    },
};
