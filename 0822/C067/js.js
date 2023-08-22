
lines = [
    '3 44',
    '4',
    '2',
    '6'
]


// 整数を2進数の文字列に変換する関数
const toBinary = num => num.toString(2);

// 与えられた2進数の文字列の右から指定された位置のビットを取得する関数
const getNthBitFromRight = (binaryNumber, positionsFromRight) => {
    return positionsFromRight.map(num => parseInt(binaryNumber[binaryNumber.length - num]));
};



// ーーーーーー↓出力↓ーーーーーー

const [N, X] = lines[0].split(" ").map(Number);

// 右から何番目をチェックしたいかを示す配列を作成
const positionsFromRight = lines.slice(1).map(Number);

// 指定されたビット位置の値を取得し、結果を改行で区切って出力
console.log(getNthBitFromRight(toBinary(X), positionsFromRight).join('\n'));



