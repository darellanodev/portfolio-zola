// they can't be accesed directly from outside
class Hud {
    constructor (money, lives) {
        this.money = money
        this.lives = lives
    }
    draw() {
        this.#drawMoney()
        this.#drawLives()
    }
    #drawMoney() {
        // logic to draw the money indicator
        console.log(`drawing the money indicator ${this.money}`);
    }
    #drawLives() {
        // logic to draw the lives indicator
        console.log(`drawing the lives indicator ${this.lives}`);
    }
}

const hud = new Hud(15,28)
hud.draw()