const lines = [
    '4 60',
    '100 10',
]

// M:割引の条件となる同時購入の数 D:割引率
// P:購入する商品の価格 N:個数
const [M, D, P, N] = lines.flatMap(str => str.split(' ').map(Number));

console.log(Math.floor((N % M * P) + P * (100 - D) / 100 * (N - (N % M))));