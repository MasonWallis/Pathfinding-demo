class Player {
    /** @type {Phaser.Scene} */
    scene
    /** @type {Phaser.Physics.Arcade.Sprite} */
    sprite
    /** @type {number} */
    standardSpeed = 300
    /** @type {number} */
    powerUpSpeed = 500
    /** @type {number} */
    currentSpeed
    /** @type {object} */
    keys
    /** @type {Phaser.Input.Keyboard.Key} */
    spaceBar
    /** @type {boolean} */
    isDead = false
    /** @type {boolean} */
    hasGun = false

    constructor(scene, x, y, texture) {
    }
    update(time, delta) {
    }
}