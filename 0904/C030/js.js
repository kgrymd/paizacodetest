const lines = [
    '3 2',
    '128 127',
    '127 128',
    '128 127',
]

// 出力例1
// 1 0
// 0 1
// 1 0


const convertToBinaryImage = (arrays) => arrays.map(array => array.map(num => num >= 128 ? 1 : 0));

const convertArrayToSpaceSeparatedString = (arrays) => arrays.map(array => array.join(' '));

const [height, width] = lines[0].split(' ').map(Number);
const pixelVals = lines.slice(1).map(str => str.split(' ').map(Number));
const binaryImage = convertToBinaryImage(pixelVals);
const result = convertArrayToSpaceSeparatedString(binaryImage);

console.log(result.join('\n'));