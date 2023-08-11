// クラスを作成
class RangeNumber {
    constructor(min = 0, max = 0) {
        this._min = min
        this._max = max
    }
    get min() {
        return this._min
    }
    set min(num) {
        this._min = num
    }
    get max() {
        return this._max
    }
    set max(num) {
        this._max = num
    }
    toArray() {
        return Array(this.max - this.min).fill(this.min).map((n, i) => n + i)
    }
    countMatches(num, mode = "perfect") {
        switch (mode) {
            case "perfect":
                return this.toArray().filter(n => n === num).length
            case "partial":
                return this.toArray().filter(n => n.toString().includes(num.toString())).length
            default:
                return 0
        }
    }
}

// MAIN
const num = +lines[0]; // 0 ≦ num ≦ 364
const rangeNumber = new RangeNumber(0, 365)
const count = rangeNumber.countMatches(num, "partial")
console.log(count)