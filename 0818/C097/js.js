const lines = ["5 2 4"];


const getInput = () => [N, A, B] = lines[0].split(" ");

const createApplicantArray = (n) => {
    const array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array
}


const getResultArray = (array, n, a, b) => {
    newArray = [...array];
    for (let i = 0; i < n; i++) {
        if (newArray[i] % a === 0 && newArray[i] % b === 0) {
            newArray[i] = "AB"
        } else if (newArray[i] % a === 0) {
            newArray[i] = "A"
        } else if (newArray[i] % b === 0) {
            newArray[i] = "B"
        } else {
            newArray[i] = "N"
        }
    }
    return newArray;
}


const printResult = (array) => {
    array.forEach(element => {
        console.log(element);
    });
}

// ----------出力------------

[N, A, B] = getInput();
printResult(getResultArray(createApplicantArray(N), N, A, B));

