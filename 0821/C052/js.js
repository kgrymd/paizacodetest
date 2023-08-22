lines = [
    '240 180',
    '30 30'
]

// 出力例1
// 11700

// (xの解像度 * y方向の移動画素) + (yの解像度 * x方向の移動画素) - (y方向の移動画素 * x方向の移動画素)
const calcDrawing = (height, width, dy, dx) => (width * dy) + (height * dx) - (dx * dy);


const [[height, width], [dy, dx]] = lines.map(str => str.split(" ").map(Number));

console.log('中身', lines.map(str => str.split(" ").map(Number)))

console.log((width * dy) + (height * dx) - (dx * dy));