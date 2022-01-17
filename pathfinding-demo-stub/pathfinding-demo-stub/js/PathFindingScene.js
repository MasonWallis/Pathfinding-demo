class PathFindingScene extends Phaser.Scene {
    /** @type {Phaser.Tilemaps.Tilemap} */
    map
    /** @type {Player} */
    player
    /** @type  {Phaser.Physics.Arcade.Sprite} */
    gun
    /** @type {Array.<Enemy>} */
    enemies = []
    /** @type {Array.<object>} */
    enemySpawnPoints = []
    /** @type {Enemy} */
    activeEnemy
    /** @type {number} */
    minEnemies = 2
    /** @type  {Phaser.Physics.Arcade.Group} */
    bullets
    constructor() {
        super({ key: 'pathFindingScene' })
    }
    preload() {
    }
    create() {
    }
    findPath(point) {
    }
    moveEnemy(path) {
    }
    onEnemySpawn() {
    }
    handleEnemyMove(enemy) {
    }
    collectGun(player, gun) {
    }
    fireBullet() {
    }
    worldBoundsBullet(body) {
    }
    bulletHitWall(bullet, layer) {
    }
    bulletHitEnemy(enemySprite, bullet) {
    }
    collideEnemy(player, sprite) {
    }
    update(time, delta) {
    }
}