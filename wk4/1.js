class Robot {
    constructor(name) {
        this.name = name

    }

    move() {
        console.log(`${this.name} is moving`)
    }

}

const r1 = new Robot('somerobot')
r1.move()

class Weapon {
    constructor(name) {
        this.name = name
    }

    fire() {
        console.log(`${this.name} is firing`)
    }
}

const w1 = new Weapon('laser')

class CombatRobot extends Robot {
    constructor(name) {
        super(name)
        this.weapons = []
    }

    addWeapons(w) {
        this.weapons.push(w)
    }

    fire() {
        console.log('firing all weapons')
        this.weapons.forEach(element => {
            element.fire()
        });
    }

}


console.log('*********************')

const r2 = new CombatRobot('somerobot')
r2.addWeapons(w1)
r2.move()
r2.fire()