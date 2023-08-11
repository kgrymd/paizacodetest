//連続した数字を配列にする関数
// const array = (n) => {
//     return [...Array(n)].map((_, i) => ++i);
// };

const array = (n) => {
    return [...Array(n + 1)].map((_, i) => i);
};

//365日を配列にする
// const dayArray = array(364);
const dayArray = array(10);

console.log("dayArray, ", dayArray)

//filterで一致するものを新しい配列にする
const luckyDayFilterArray = dayArray.filter(day => {
    const dayString = String(day);
    console.log("dayString, ", dayString)
    return dayString.includes(String(6));
});

//結果
console.log(luckyDayFilterArray.length);





// const array = (n) => {
//     return [...Array(n + 1)].map((_, i) => i);
// };