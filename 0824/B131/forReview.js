lines = [
    '3 4',
    '0 1 2 3',
    '0 4 5 6',
    '0 7 8 9',
    '3',
    '1 4',
    '3 2',
    '2 2',
]

// 出力例5

// lines = [
//     '8 9',
//     '0 1 3 4 22 34 60 63 85',
//     '0 35 44 50 53 56 61 90 99',
//     '0 7 15 35 42 51 53 96 100',
//     '0 23 40 41 44 64 67 83 91',
//     '0 5 36 47 59 70 81 87 97',
//     '0 5 11 14 30 34 64 76 90',
//     '0 4 5 22 57 62 90 91 98',
//     '0 8 13 25 35 41 60 68 82',
//     '10',
//     '2 6',
//     '3 4',
//     '6 1',
//     '4 4',
//     '5 4',
//     '8 6',
//     '1 8',
//     '5 6',
//     '4 6',
//     '5 1',
// ]
// 出力例259


// N:路線の数
// M: 駅の数
const [N, M] = lines[0].split(" ").map(Number);
// X: 経由すべき駅の数
const X = lines[N + 1];




// 路線(キー)とその路線の駅1から各駅へ料金の配列(バリュー)のオブジェクトを作って返す関数
const getFareObj = (array, N) => {

    obj = {};
    array.slice(1, N + 1).forEach((str, i) => obj[`${i + 1}`] = str.split(" ").map(Number));
    return obj
}
console.log('各路線の駅1から各駅までの料金', getFareObj(lines, N));


// 経由駅の配列の配列を作って返す関数
const getDestinationStations = (array, N, X) => array.slice(N + 2, N + X).map((str) => str.split(" ").map(Number));
console.log('経由駅の配列の配列', getDestinationStations(lines, N, X));


// 合計金額を計算し結果を返す関数
const getTotalFare = (arrays, obj) => {
    let sum = 0;
    let currStation = 1;
    arrays.forEach(array => {
        console.log('array', array)
        console.log('現在の駅(移動前)', currStation)
        let currAlignment = array[0];
        sum += Math.abs(obj[`${currAlignment}`][currStation - 1] - obj[`${currAlignment}`][array[1] - 1]);
        console.log('移動する路線の1から移動前の駅までの料金', obj[`${currAlignment}`][currStation - 1]);
        console.log("移動する路線の1から移動後の駅までの料金", obj[`${currAlignment}`][array[1] - 1]);
        currStation = array[1];
        console.log('現在の駅(移動後)', currStation)


        console.log("sum", sum);
    });

    return sum;
}


// ーーーーーー↓出力↓ーーーーーー


// 結果を出力
console.log(getTotalFare(getDestinationStations(lines, N, X), getFareObj(lines, N)));