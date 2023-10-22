//Software is a type which has the method 'run'. Browser inherits Software and can add and install Plugin. A Browser can have many Plugin.

class Software {

    constructor(name) {
        this.name = name
    }

    run() {
        console.log(`Software ${this.name} is running`)
    }

}

class Plugin {

    constructor(name) {
        this.name = name
    }


}

class Browser extends Software {

    constructor(name) {
        super(name)
        this.plugins = []
    }

    installPlugin(p) {
        this.plugins.push(p)
    }

    run() {
        console.log(`Browser ${this.name} is running`)
    }
}

s1 = new Software('S')
s1.run()
p1 = new Plugin('AdBlock')
b1 = new Browser('Chrome')
b1.installPlugin(p1)
b1.run()



