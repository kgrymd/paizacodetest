const parseStr2IntArr = str => str.split(' ').map(Number)

const lines = [
    '5',
    '11 14 16 10',
    '12 15 17 10',
    '13 11 14 11',
    '12 10 13 8',
    '11 13 14 10'
];

// [始値, 終値, 高値, 安値][]
const stockPrices = lines.slice(1).map(parseStr2IntArr)
console.log("stockPrices", stockPrices);

const openRate = stockPrices[0][0]
console.log("openRate", openRate);

const closeRate = stockPrices.at(-1)[1]
console.log("closeRate", closeRate);

const highPrice = Math.max(...stockPrices.map(el => el[2]))
console.log("highPrice", highPrice);

const rowPrice = Math.min(...stockPrices.map(el => el[3]))
console.log("rowPrice", rowPrice)

console.log("けっかはっぴょーーーーーう", openRate, closeRate, highPrice, rowPrice)
