const lines = ["5 2 4"];

// わざわざ入力を受け取る関数を作成
const getInput = () => [N, A, B] = lines[0].split(" ");

// 応募者の配列を作成して返す関数
const getApplicantArray = n => Array.from({ length: n }, (_, i) => i + 1);

// 当選結果の配列を作成して返す関数
const getResultArray = (array, a, b) => {
    return array.map(val => {
        if (val % a === 0 && val % b === 0) return "AB";
        if (val % a === 0) return "A";
        if (val % b === 0) return "B";
        return "N";
    });
}

// 当選結果を出力する関数
const printResult = array => array.forEach(element => console.log(element));


// ----------↓出力↓------------

[N, A, B] = getInput();
printResult(getResultArray(getApplicantArray(N), A, B));



// ---------↓解説↓---------
// Array.from() は、配列のようなオブジェクトや反復可能なオブジェクトから新しい配列インスタンスを生成します。
// 第一引数として { length: n } というオブジェクトを渡すことで、指定した長さの空の配列を作成することができます。
// 第二引数として渡されるマッピング関数は、新しい配列の各要素に対して実行されます。
// この場合、インデックス i に 1 を加算して、1 から始まる連続した整数の配列を作成しています。
