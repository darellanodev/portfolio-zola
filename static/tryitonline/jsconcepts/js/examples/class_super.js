class Tile {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
// call super before adding other constructor parameters
class TileJump extends Tile {
    constructor(x, y, jumpLevel) {
        super(x, y)
        this.jumpLevel = jumpLevel
    }
}