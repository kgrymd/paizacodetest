const lines = ["5 2 4"];

const getInput = () => [N, A, B] = lines[0].split(" ");

// const createApplicantArray = (n) => {
//     const array = [];
//     for (let i = 1; i <= n; i++) {
//         array.push(i);
//     }
//     return array
// }

const createApplicantArray = n => Array.from({ length: n }, (_, i) => i + 1);


// const getResultArray = (array, n, a, b) => {
//     newArray = [...array];
//     for (let i = 0; i < n; i++) {
//         if (newArray[i] % a === 0 && newArray[i] % b === 0) {
//             newArray[i] = "AB"
//         } else if (newArray[i] % a === 0) {
//             newArray[i] = "A"
//         } else if (newArray[i] % b === 0) {
//             newArray[i] = "B"
//         } else {
//             newArray[i] = "N"
//         }
//     }
//     return newArray;
// }

const getResultArray = (array, a, b) => {
    return array.map(val => {
        if (val % a === 0 && val % b === 0) return "AB";
        if (val % a === 0) return "A";
        if (val % b === 0) return "B";
        return "N";
    });
}


// const printResult = (array) => {
//     array.forEach(element => {
//         console.log(element);
//     });
// }

const printResult = array => array.forEach(element => console.log(element));

// ----------出力------------

[N, A, B] = getInput();
printResult(getResultArray(createApplicantArray(N), N, A, B));

