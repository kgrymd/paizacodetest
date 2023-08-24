lines = ['<///////+<<</+////'];

// 期待52

//+で区切って配列に格納する関数
const createCipherArray = (input) => input.split('+');

// 空前のflatMapブーム
// 暗号(文字列)の配列を数字のflat配列に変換する関数
const convertCipherToNumbers = (array) => {
    return array.flatMap((str) => {
        const numbers = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '<') {
                numbers.push(10);
            } else if (str[i] === '/') {
                numbers.push(1);
            }
            // console.log("for内", numbers)
        }
        // console.log("flatMap内", numbers)
        return numbers;
    });
}

// 空前のreduceブーム
const getResult = (array) => array.reduce((acc, curr) => acc + curr, 0)



// ーーーーーー↓出力↓ーーーーーー


// console.log('createCipherArray()', createCipherArray(lines[0]));

// console.log("convertCipherToNumbers()", convertCipherToNumbers(createCipherArray(lines[0])));


console.log("結果", getResult(convertCipherToNumbers(createCipherArray(lines[0]))));