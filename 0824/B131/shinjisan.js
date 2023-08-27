lines = [
    '3 4',
    '0 1 2 3',
    '0 4 5 6',
    '0 7 8 9',
    '3',
    '1 4',
    '3 2',
    '2 2',
]


const calcFare = (table, now, old = initialPosition) => {
    return Math.abs(table[now[0]][old[1]] - table[now[0]][now[1]])
}

const sumFares = (table, route) => {
    return route.reduce((acc, position, i) => {
        return acc + calcFare(table, position, route[i - 1])
    }, 0)
}

const [N, _] = lines[0].split(" ").map(Number)
const fareTable = lines.slice(1, N + 1).map(el => el.split(' ').map(Number))
console.log('fareTable', fareTable)
const route = lines.slice(N + 2).map(el => el.split(' ').map(e => +e - 1))
console.log('route', route);
const initialPosition = [0, 0];

console.log(sumFares(fareTable, route));