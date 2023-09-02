const lines = [
    '4 2',
    '6 6 6',
    '4 6 4',
    '6 1 1',
    '4 4 4',
]


const getResultArray = (arrays, r) => {
    newArray = [];
    arrays.forEach((array, i) => {

        if (Math.min(...array) >= r * 2) {
            newArray.push(i + 1)
        }
    })
    return newArray;
};


const [n, r] = lines[0].split(' ').map(Number);

const boxSizes = lines.slice(1).map(str => str.split(' ').map(Number));

console.log(getResultArray(boxSizes, r).join('\n'));