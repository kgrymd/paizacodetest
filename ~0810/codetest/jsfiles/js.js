// ↓入力例1
// 11 14 16 10
// 12 15 17 10
// 13 11 14 11
// 12 10 13 8
// 11 13 14 10


// ユーザー入力のためのプロンプト関数
function getUserInput(promptText) {
    const readlineSync = require('readline-sync');
    return readlineSync.question(promptText);
}

// 日数を取得
let aNumOfDays = parseInt(getUserInput("日数を入力せい"));

// とりあえず1日ごとの始値、終値、高値、安値の辞書(オブジェクト)のリスト(配列)を作成して返す関数
function getDailyFourTypesOfStockPricesArry(num) {
    let sehlArry = [];
    for (let i = 0; i < num; i++) {
        let arryOfPrices = getUserInput("始値、終値、高値、安値を入力せい").split(" ").map(Number);
        let obj = {
            'start': arryOfPrices[0],
            'end': arryOfPrices[1],
            'highest': arryOfPrices[2],
            'lowest': arryOfPrices[3]
        }
        sehlArry.push(obj);
    }
    return sehlArry;
}

// 全日数での始値、終値、高値、安値の辞書(オブジェクト)を作成して返す関数
function getTotalFourTypesOfStockPrices(sehArry) {
    let resultObj = {
        'start': sehlArry[0]['start'],
        'end': sehlArry[sehlArry.length - 1]['end']
    };
    sehlArry.forEach(function (obj) {
        if (obj['highest'] >= resultObj['highest'] || resultObj['highest'] === undefined) {
            resultObj['highest'] = obj['highest'];
        }
        if (obj['lowest'] <= resultObj['lowest'] || resultObj['lowest'] === undefined) {
            resultObj['lowest'] = obj['lowest'];
        }
    });
    return resultObj;
}

// 結果を出力する関数
function printResult(obj) {
    console.log(`${obj['start']} ${obj['end']} ${obj['highest']} ${obj['lowest']}`);
}

printResult(getTotalFourTypesOfStockPrices(getDailyFourTypesOfStockPricesArry(aNumOfDays)));
