// 休みが取れる最初と最後の日から連続した配列を作る、メンバー全員分を一次元配列にいれる
// 一次元配列 [22, 23, 17, 18, 19, 20, 14, 15, 16, 17, 18, 19]
// 3人の日程が上の配列に格納されている
// 配列の中の数字で、一番多く登場する回数がメンバーの数と同じであれば、全員の予定が合う

const lines = [
    '3',
    '22 23',
    '17 20',
    '14 19',
]


const [member, ...restDuration] = lines;
let count = {};

// 各メンバーの休暇期間を表す、二次元配列が作られる[ [ 22, 23 ], [ 17, 20 ], [ 14, 19 ] ]
const holidayArray = restDuration.map((day) => day.split(" ").map(Number));

// 最初と最後の日から連続した配列をつくる [ [ 22, 23 ], [ 17, 18, 19, 20 ], [ 14, 15, 16, 17, 18, 19 ] ]
const holidays = holidayArray.flatMap((date, i) => ([...Array(date[1] - date[0] + 1)].map((_, i) => i + date[0])));

console.log(holidays);

// ２次元配列を１次元配列に変換 [22, 23, 17, 18, 19, 20, 14, 15, 16, 17, 18, 19]
const flatHolidays = holidays.flatMap((a) => a);

// 最初と最後の日にちから連続した配列を作成する
// const holidays = dayArray.map((date, i) => generateDayArray(date, i));
flatHolidays.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
});

//{'14': 1, '15': 1, '16': 1, '17': 2, '18': 2, '19': 2, '20': 1, '22': 1, '23': 1}
// console.log(count);

// [1, 1, 1, 2, 2, 2, 1, 1, 1]
//   console.log(Object.values(count));
// console.log(Math.max(...Object.values(count)) === Number(member) ? "OK" : "NG");