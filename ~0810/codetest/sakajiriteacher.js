reader.on('close', () => {
    const data = lines[0].split(' ').map(Number)
    console.log(calcTotalCost(data[0], data[1]));
});

function calcTotalCost(cost, rate) {
    return cost == 0 ? 0 : cost + calcTotalCost(Math.floor(cost * (100 - rate) / 100), rate)
}