const lines = [
    '3 3',
    '1000 1000 50',
    '25',
    '80',
    '500',
]



// 建設費用(A) + 人件費(B) * 営業期間(M) > ラーメン1杯あたりの利益(C) * 販売数(salesNumbersの要素)
const getNumOfRestaurantClosed = (A, B, C, M, array) => array.filter((n) => A + B * M > C * n).length;


const [N, M] = lines[0].split(" ").map(Number);
const [A, B, C] = lines[1].split(" ").map(Number);
const salesNumbers = lines.slice(2).map(Number);

console.log(getNumOfRestaurantClosed(A, B, C, M, salesNumbers));