const lines = [
    '5 110 120',
    '110',
    '100',
    '120',
    '130',
    '105',
]

// N:日数 buyPrice:この値段以下だと買うという株価 sellPrice:この値段以上だと売るという株価
const [N, buyPrice, sellPrice] = lines[0].split(' ').map(Number);
const stockPriceArray = lines.slice(1, -1).map(Number); // 最後の日の株価は別に取り扱うので除外
const lastDayStockPrice = parseInt(lines.slice(-1)[0]); // 最後の日の株価

let stockCount = 0;  // 所持株数
let currentProfit = 0;  // 現在の損益

stockPriceArray.forEach((num) => {
    if (num <= buyPrice) {  // 購入条件
        stockCount++;
        currentProfit -= num;
    } else if (num >= sellPrice) {  // 売却条件
        currentProfit += stockCount * num;
        stockCount = 0;
    }
});

// N日目に持っている株をすべて売る
currentProfit += stockCount * lastDayStockPrice;

console.log(currentProfit);