// act as a property but can contain logic
class GreenTower {
    static shotDamageLevels = [5, 10, 30, 120, 300]
    
    constructor (x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
        this.upgradeLevel = 0
    }

    get shotDamage() {
        return GreenTower.shotDamageLevels[this.upgradeLevel]
    }
}

const towerOne = new GreenTower(10, 10, 200)
console.log(towerOne.shotDamage)
