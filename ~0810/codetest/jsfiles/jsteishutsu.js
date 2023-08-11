process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
// var lines = [];
// var lines = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    const sehlArry = lines.slice(1).map(line => {  // 1行目以降を取得してオブジェクトの配列に変換。n使わんくてええんかい
        const arryOfPrices = line.split(" ").map(Number);

        return {
            'start': arryOfPrices[0],
            'end': arryOfPrices[1],
            'highest': arryOfPrices[2],
            'lowest': arryOfPrices[3]
        };
    });

    const resultObj = getTotalFourTypesOfStockPrices(sehlArry);
    consoleLogResult(resultObj);
});

const getTotalFourTypesOfStockPrices = (sehlArry) => {
    const highest = Math.max(...sehlArry.map(obj => obj.highest));
    const lowest = Math.min(...sehlArry.map(obj => obj.lowest));

    return {
        'start': sehlArry[0].start,
        'end': sehlArry[sehlArry.length - 1].end,
        'highest': highest,
        'lowest': lowest
    };
}

const consoleLogResult = (obj) => {
    console.log(`${obj['start']} ${obj['end']} ${obj['highest']} ${obj['lowest']}`);
}
