//＋を取り除く、記号を一つ一つにする
const formatData = symboles => symboles.replace(/\+/g, '').split('');
//['/', '/', '/' ,'/' , '/', '/','/']

// paiza記法に置き換えて新しい配列を作る
const paizaStyle = charcterArray => charcterArray.map((character) => {
    return character === '/' ? 1 : 10;
});

//合計を出す
const decodePaizaStyle = newArray => newArray.reduce((sum, num) => sum + num, 0);

//結果
console.log(decodePaizaStyle(paizaStyle(formatData(lines[0]))));