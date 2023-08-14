
lines = ["AAAABA"]

// const checkPassword = word => {
//     console.log("[...word]", [...word])
//     const count = [...word].reduce((acc, char) => {
//         console.log("acc", acc);
//         console.log("char", char);
//         return char === word[0] ? acc + 1 : acc;
//     });
//     return count === word.length ? "NG" : "OK";
// }
// console.log(checkPassword(lines[0]));

const checkPassword = word => {
    const sameChars = [...word].filter(char => char === word[0]);
    return sameChars.length === word.length ? 'NG' : 'OK';
}


// const checkPassword = word => {
//     for (let i = 0; i < word.length - 1; i++) {
//         if (word[i] !== word[i + 1]) {
//             return 'OK';
//         }
//     }
//     return 'NG';
// }

console.log(checkPassword(lines[0]));