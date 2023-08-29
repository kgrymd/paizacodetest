const lines = [
    '3',
    '22 23',
    '17 20',
    '14 19',
]



// const lines = [
//     '2',
//     '16 19',
//     '14 17',
// ]

// ーーーーーー↓出力↓ーーーーーー
const N = parseInt(lines[0]);

const dayOffArray = lines.slice(1).map(str => str.split(' ').map(Number));

console.log(isCommonDate(...dayOffArray) ? 'OK' : 'NG');

//[14, 19] を [14,15,16,17,18,19]にする関数
const createArray = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}


const isCommonDate = (...arrays) => {
    const newArrays = arrays.map(array => createArray(array[0], array[1]))

    // 最初の配列の各要素に対して、他の全ての配列にその要素が存在するかをチェック
    return newArrays[0].some(element =>
        newArrays.every(newArray => newArray.includes(element))
    );
}




