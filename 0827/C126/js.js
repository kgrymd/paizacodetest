const lines = [
    '200 300 3',
    '1 3',
    '4 6',
    '8 10',
]



const getTotalExpense = (A, B, array) => {
    let expenses = [];

    for (let i = 0; i < array.length - 1; i++) {

        let interval = array[i + 1][0] - array[i][1];

        A * 2 > interval * B ? expenses.push(interval * B) : expenses.push(A * 2);
    }
    expenses.push(A * 2);
    return expenses;
}


// A: 片道料金 B: ホテルの一泊料金 N: インターンシップの回数
const [A, B, N] = lines[0].split(' ').map(Number);

const internshipPeriod = lines.slice(1).map(str => str.split(' ').map(Number));

console.log(getTotalExpense(A, B, internshipPeriod).reduce((acc, curr) => acc + curr, 0));