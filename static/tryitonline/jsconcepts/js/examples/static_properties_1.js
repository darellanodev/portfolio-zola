// they are related to the Class, not the instances
class GreenTower {
    static shotDamageLevels = [5, 10, 30, 120, 300]
    static family = "laser towers"

    constructor (x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
    }

    getShotDamage(level) {
        return GreenTower.shotDamageLevels[level]
    }
}

console.log(GreenTower.family)
console.log(GreenTower.shotDamageLevels)

const towerOne = new GreenTower(10, 10, 200)
console.log(towerOne.getShotDamage(0))
