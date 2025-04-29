// they can't be accesed directly from outside
class Enemy {
    #x
    #y
    #endurance
    constructor (x, y, endurance) {
        this.#x = x
        this.#y = y
        this.#endurance = endurance
    }
    get posX() {
        return this.#x
    }
    get posY() {
        return this.#y
    }
    get endurance() {
        return this.#endurance
    }
}

const enemy = new Enemy(10,20,500)
console.log(enemy.posX);