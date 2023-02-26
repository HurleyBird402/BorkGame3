import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader')
    }

    preload()
    {
        this.load.spritesheet('bork', 'textures/bork_tilesheet.png', {
            frameWidth: 64
        })

        this.load.image('spaceViking', 'textures/spaceViking.png')
        this.load.image('drone', 'textures/drone.png')
        this.load.image('aether', 'textures/aether.png')
        this.load.image('slork', 'textures/slork.png')
        this.load.image('alientopus', 'textures/alientopus.png')
        
        this.load.audio("win", 'sounds/win.wav');
        this.load.audio("lose", 'sounds/lose.wav');
        this.load.audio("alien", 'sounds/alien.wav');
    }

    create()
    {
        this.anims.create({
            key: 'down-idle',
            frames: [{ key: 'bork', frame: 0 }]
        })
    
        this.anims.create({
            key: 'up-idle',
            frames: [{ key: 'bork', frame: 3 }]
        })
    
        this.anims.create({
            key: 'left-idle',
            frames: [{ key: 'bork', frame: 8 }]
        })
    
        this.anims.create({
            key: 'right-idle',
            frames: [{ key: 'bork', frame: 6 }]
        })
    
        this.anims.create({
            key: 'down-walk',
            frames: this.anims.generateFrameNumbers('bork', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        })
    
        this.anims.create({
            key: 'up-walk',
            frames: this.anims.generateFrameNumbers('bork', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        })
    
        this.anims.create({
            key: 'left-walk',
            frames: this.anims.generateFrameNumbers('bork', { start: 8, end: 9 }),
            frameRate: 10,
            repeat: -1
        })
    
        this.anims.create({
            key: 'right-walk',
            frames: this.anims.generateFrameNumbers('bork', { start: 6, end: 7 }),
            frameRate: 10,
            repeat: -1
        })

        // start game scene
        this.scene.start('game')
    }
}