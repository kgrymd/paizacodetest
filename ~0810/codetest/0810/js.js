lines = [
    "1 3 2 6 3 5 5 6 2 6 0 4 5 2 4 2 1 2 4 0 4 2 2 5 0 2",
    "abcabcabcabc"
]

line0 = '1 3 2 6 3 5 5 6 2 6 0 4 5 2 4 2 1 2 4 0 4 2 2 5 0 2'



// アルファベットの配列を作る
const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

// 耐久度の配列を返す関数
const getDurabilityArry = str => str.split(' ').map(Number);

// アルファベットに対応する耐久度のオブジェクトを返す関数
const getDurabilityObj = (alphabets, array) => {
    const durability = {};
    alphabets.forEach((char, index) => {
        durability[char] = array[index];
    });
    return durability
}

// 出力すべき結果を返す関数
const getResult = (inputStr, obj) => {
    let outputStr = '';
    for (let char of inputStr) {
        if (obj[char] > 0) {
            outputStr += char;
            obj[char]--;
        }
    }
    return outputStr
}

console.log(getResult(lines[1], getDurabilityObj(alphabets, getDurabilityArry(lines[0]))));


