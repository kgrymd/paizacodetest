const lines = [
    '4',
    '5',
    '101',
    '204',
    '301',
    '401',
    '501',
];

const [hateNum, m, ...roomNum] = lines.map(Number);

// console.log(hateNum, m, roomNum);

const fn = (hateNum, roomNum) => {
    const count = roomNum.filter(num => !num.toString().includes(hateNum.toString()));
    // console.log(count);
    return count.length > 0 ? count.join('\n') : "none";
};

console.log(fn(hateNum, roomNum));
