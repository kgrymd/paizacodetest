const lines = [
    '1 2 3 4 5 6',
    '3',
    '1 5 4 2 3 6',
    '9 6 2 7 1 5',
    '32 9 87 33 41 60',

]



// 当選番号を取得し、数値の配列に変換
const winNums = lines[0].split(' ').map(Number);

// 購入したくじの数（N）とくじの数字を取得
const N = parseInt(lines[1]);
const boughtTickets = lines.slice(2).map(str => str.split(' ').map(Number));

// 各くじについて、当選番号と一致する数字の数を求める
for (let i = 0; i < N; i++) {
    const ticket = boughtTickets[i];
    let matchCount = 0;
    ticket.forEach(num => {
        if (winNums.includes(num)) {
            matchCount++;
        }
    })
    console.log(matchCount);
}