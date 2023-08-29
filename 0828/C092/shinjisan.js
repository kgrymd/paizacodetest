reader.on('close', () => {
    const piazaPlant = new Plant({
        signal: new Signal(lines[1]),
        combares: lines.slice(2).map(el => new Combare(el))
    })

    piazaPlant.showRemaining()
});

class Plant {
    constructor({ signal, combares }) {
        this.signal = signal
        this.combares = combares
    }

    run() {
        this.signal
            .directions
            .reduce((acc, direction) => {
                return acc.map(combare => combare.move(direction))
            }, this.combares)
        this.signal.directions = []
    }

    get remaining() {
        return this.combares.map(el => el.directions.length)
    }

    showRemainingLast() {
        this.run()
        console.log(this.remaining.join(" "))
    }

}

class Signal {
    constructor(str) {
        this.directions = [...str]
    }
}

class Combare {
    constructor(str) {
        this.directions = [...str]
    }

    move(signalDirection) {
        if (signalDirection === this.directions[0]) this.directions.shift()
        return this
    }
}