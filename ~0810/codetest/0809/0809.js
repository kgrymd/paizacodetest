const x = 15;


const luckyDays = (x) => {
    let count = 0;

    // 1から365までの各日について、その日が幸運の日であるかを確認
    for (let i = 0; i <= 364; i++) {
        if (i.toString().includes(x.toString())) {
            count++;
        }
    }

    return count;
};

// 例：15が与えられた場合
console.log(luckyDays(x));  // 出力: 14
