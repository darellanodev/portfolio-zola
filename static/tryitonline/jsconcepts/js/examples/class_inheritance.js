// parent class
class Enemy {
    constructor(x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
    }
    moveRight() {
        this.x ++
    }
}
// child class
class EnemyBoss extends Enemy {
    moveRight() {
        this.x += 0.2
    }
}