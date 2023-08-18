const lines = [
    '4 1 1',
    '4 2',
    '-5 -4',
    '3 3',
    '3 3',
];

const getWindVectors = num => lines.slice(1, num + 1).map(str => str.split(" ").map(Number));

const calcDistance = (windVectors, x, y) => {
    let currentX = x;
    let currentY = y;
    let maxX = x;

    for (let vector of windVectors) {
        if (currentY <= 0) {
            break;
        }
        currentX += vector[0];
        currentY += vector[1];
        if (currentX > maxX) {
            maxX = currentX;
        }
    }
    return maxX;
}

const [time, initialX, initialY] = lines[0].split(" ").map(Number);
console.log(calcDistance(getWindVectors(time), initialX, initialY));



// ーーーーーーーー↓Reduce使ったver↓ーーーーーーーー

// const getWindVectors = n => lines.slice(1, n + 1).map(str => str.split(" ").map(Number));

// const calcDistance = (vectors, x, y) => {
//     const result = vectors.reduce((acc, [dx, dy]) => {
//         if (acc.currentY <= 0) return acc;

//         acc.currentX += dx;
//         acc.currentY += dy;

//         if (acc.currentX > acc.maxX) {
//             acc.maxX = acc.currentX;
//         }

//         return acc;
//     }, { currentX: x, currentY: y, maxX: x });

//     return result.maxX;
// }

// const [time, initialX, initialY] = lines[0].split(" ").map(Number);
// console.log(calcDistance(getWindVectors(time), initialX, initialY));
