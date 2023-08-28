// const lines = [
//     '5 3 2',
//     'RRLFL',
//     'RFR',
//     'LR',
// ];

const lines = [
    '5 3 2',
    'RRLLF',
    'RRL',
    'RL',
]

// N:信号機のスケジュールの長さ A:ベルトコンベアAに乗っている部品の数 B:ベルトコンベアBに乗っている部品の数
const [N, A, B] = lines[0].split(' ').map(Number);
const [signalSchedule, conveyorA, conveyorB] = lines.slice(1);

let remainingA = A;
let remainingB = B;
let indexA = 0;
let indexB = 0;


for (let i = 0; i < N; i++) {
    const signal = signalSchedule[i];

    if (indexA < A && conveyorA[indexA] === signal) {
        remainingA--;
        indexA++;
    }

    if (indexB < B && conveyorB[indexB] === signal) {
        remainingB--;
        indexB++;
    }
}

console.log(`${remainingA} ${remainingB}`);



