process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    const [X, P] = lines[0].split(' ').map(Number);
    console.log(calculateTotalCost(X, P));
});

const calculateTotalCost = (x, p) => {
    let totalCost = 0;
    while (x > 0) {
        totalCost += x;
        x = Math.floor(x * (1 - p / 100));
    }
    return totalCost;
};