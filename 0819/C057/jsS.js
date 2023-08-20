// しょうごくんの解答コード


// x,yの座標の計算結果を、それぞれ配列に格納
// 計算結果のyが0より大きければ、繰り返して計算続行する
// yが０以下なら、その時点で繰り返し終了する
// xの計算結果を格納した配列から最大値を求め出力する

// 初期座標取り出す
const [, startPosX, startPosY] = lines[0].split(" ").map(Number);
const windData = lines.slice(1);
// 計算結果を入れる配列に初期座標を入れておく
let posDataX = [startPosX];
let posDataY = [startPosY];

const calculateX = (sX, mX, time) => {
    if (time === 0) {
        newPosX = sX + mX;
        return newPosX;
    } else {
        newPosX += mX;
        return newPosX
    }
}

const calculateY = (sY, mY, time) => {
    if (time === 0) {
        newPosY = sY + mY;
        return newPosY;
    } else {
        newPosY += mY;
        return newPosY
    }
}

windData.some((data, i) => {
    const [moveX, moveY] = data.split(" ").map(Number);
    newPosX = calculateX(startPosX, moveX, i);
    newPosY = calculateY(startPosY, moveY, i);

    posDataX.push(newPosX);
    // y座標が０以下ならループを終了する
    if (newPosY <= 0) {
        return true;
    }
    posDataY.push(newPosY);
})
console.log(Math.max(...posDataX));







(1, 1)

    (1, -2)



    (2, -1)