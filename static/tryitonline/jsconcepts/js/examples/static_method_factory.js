// for creating instances. instantiateEnemy is related to Enemy
class Enemy {
    constructor (x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
    }
    static instantiate() {
        const x = Math.round(Math.random(5) * 10)
        const y = Math.round(Math.random(5) * 10)
        const endurance = Math.round(Math.random(5) * 200)
        return new Enemy(x, y, endurance)
    }
}
const enemyOne = Enemy.instantiate()
console.log(enemyOne)