// ============↓提出コード↓===============

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

// var lines = [];
// var reader = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// reader.on('line', (line) => {
//     lines.push(line);
// });

// reader.on('close', () => {
//     console.log(getResult(lines[0]));
// });

// const getResult = (str) => {
//     let numbers = str.split(' ').map(num => parseInt(num, 10));
//     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum.toString().slice(-1);
// }

// ============↑提出コード↑===============



// ============↓確認用解説つきコード↓===============

var lines = ["1 9 8 9 12"];

const getResult = (str) => {
    console.log("lines[0]: ", lines[0]);

    // ↓文字列をスペースで区切って配列にし、その配列内の各要素をmapでint型に変換して新しい配列を返す
    let numbers = str.split(' ').map(num => parseInt(num, 10));
    console.log("numbers: ", numbers);

    // ↓reduce()を使わない場合、
    // let sum = 0;
    // numbers.forEach(num => {
    //     sum += num;
    // });
    // ↑のreduce()を使わない場合のlet sum = 0; の0の代わりにreduce()の引数で初期値0を設定している。んでsumという変数の代わりにacc(累積値),numの代わりにcurr(現在の要素)を使っている
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("sum: ", sum)

    // ↓sumをtoString()で文字列に変換し、slice(-1)で最後の文字を取得している
    return sum.toString().slice(-1);
}

console.log("けっかはっぴょーーーーーう, ", getResult(lines[0]));

// ============↑確認用解説つきコード↑===============




// ============↓reduce()の解説↓===============


// はい、その理解は正確です。

// まとめると、reduce()は以下の特徴を持っています：

// reduce()は配列に対して使用され、単一の値を返します。
// reduce()の最も重要な引数は、各要素に対して実行されるコールバック関数です。
// このコールバック関数は最低でも2つの引数、accumulator（累積値、通常accと略される）とcurrentValue（現在の要素、通常currと略される）を取ります。
// コールバック関数はオプションで、3つ目の引数としてcurrentIndex（現在の要素のインデックス）を、4つ目の引数としてarray（reduce()が適用される配列）を取ることもできます。
// reduce()は2つ目のオプション引数としてinitialValue（累積値の初期値）を取ることができます。この初期値は、累積の開始値として使用されます。
// initialValueが指定されていない場合、配列の最初の要素がその値として使用され、コールバック関数の初回の呼び出しは2番目の要素から開始されます。
// 以上の内容で、reduce()の基本的な動作と使用方法についての理解が正確です。



// ============↑reduce()の解説↑===============


