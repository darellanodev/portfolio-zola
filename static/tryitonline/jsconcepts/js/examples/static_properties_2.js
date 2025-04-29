// they are related to the Class, not the instances
class Enemy {
    static totalEnemies = 0
    
    constructor (x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance

        Enemy.totalEnemies++
        this.id = Enemy.totalEnemies
    }
}