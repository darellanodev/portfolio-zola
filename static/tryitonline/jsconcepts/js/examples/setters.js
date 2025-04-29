// act as a property but can contain logic
class GreenTower {
    static shotDamageLevels = [5, 10, 30, 120, 300]
    
    constructor (x, y, endurance) {
        this.x = x
        this.y = y
        this.endurance = endurance
        this.upgradeLevel = 0
    }

    set upgradeLevel(level) {
        if (level < 0 || level > 4) {
            throw new Error ("Level must be between 0 and 4")
        }
        return GreenTower.shotDamageLevels[this.upgradeLevel]
    }
}

const towerOne = new GreenTower(10, 10, 200)
towerOne.upgradeLevel = 4

