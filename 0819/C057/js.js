lines = [
    '4 1 1',
    '4 2',
    '-5 -4',
    '3 3',
    '3 3',
]


const getWindArrayArray = n => lines.slice(1, n + 1).map(str => str.split(" ").map(Number));

const getMaxX = (arrays, x, y) => {
    let currentX = x;
    let currentY = y;
    let maxX = x;

    for (let array of arrays) {
        if (currentY <= 0) break;

        currentX += array[0]
        currentY += array[1];

        if (currentX > maxX) {
            maxX = currentX
        }
    }
    return maxX;
}



const [time, firstX, firstY] = lines[0].split(" ").map(Number);


console.log(getWindArrayArray(time));
// console.log(calcDistance(getWindArrayArray(time), firstX, firstY));