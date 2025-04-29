// A simple class with a constructor
class Enemy {

    constructor(x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
        
        this.isAlive = true
    }

    moveRight() {
        this.x++
    }
}