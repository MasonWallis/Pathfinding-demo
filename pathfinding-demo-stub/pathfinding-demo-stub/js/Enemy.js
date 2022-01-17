class Enemy{
    /** @type {Phaser.Physics.Arcade.Sprite} */
    sprite
    /** @type {number} */
    speed = 200 // ms between tiles
    /** @type {number} */
    targetX
    /** @type {number} */
    targetY
    /** @type {boolean} */
    pendingMove
    constructor(scene, x, y, texture) {
    }
    update(time, delta){
    }
    beginMove(){
    }
}