lines = ['9315-35-7398'];


//各数字とその数字からフックまでの距離のオブジェクトを作成し返す関数
const getDistanceObj = () => {
    obj = { 0: 12 };
    for (let i = 1; i < 10; i++) {
        obj[i] = i + 2;
    }
    return obj;
}




// 入力された電話番号の文字列から - を除き一文字ずつ要素にした配列を作成し返す関数
const getPhoneNumberArray = (str) => str.replace(/-/g, '').split('').map(Number);


// 総距離を計算して返す関数
const getTotalDistance = (array, distanceObj) => array.reduce((acc, num) => acc + distanceObj[num] * 2, 0);



// ーーーーーーーーーーー↓出力↓ーーーーーーーーーーーー

console.log(`こいつだ...
1.2.3`, getPhoneNumberArray(lines[0]))
console.log(getTotalDistance(getPhoneNumberArray(lines[0]), getDistanceObj()));