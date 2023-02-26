import Phaser from 'phaser'

import Preloader from './scenes/Preloader'

import Game from './scenes/Game'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
	backgroundColor: '#808080',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [Preloader, Game],
}

export default new Phaser.Game(config)
