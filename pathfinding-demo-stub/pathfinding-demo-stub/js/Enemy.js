class Enemy{
    /** @type {Phaser.Physics.Arcade.Sprite} */
    sprite
    /** @type {number} */
    speed = 200 // milleseconds between tiles to tile movement
    /** @type {number} */
    targetX
    /** @type {number} */
    targetY
    /** @type {boolean} */
    pendingMove
    constructor(scene, x, y, texture) {
        this.scene = scene
        this.sprite = scene.physics.add.sprite(x, y, texture)
        this.sprite.body.immovable = true
    }
    update(time, delta){
        // is it time to move?
        if(!this.pendingMove && this.sprite.x == this.targetX && this.sprite.y == this.targetY){
            this.pendingMove = true
            this.scene.time.delayedCall(500, this.beginMove, [], this)
        }
    }
    beginMove(){
        console.log('enemy ready')
        this.scene.events.emit('enemyready', this)
        this.pendingMove = false
    }
}