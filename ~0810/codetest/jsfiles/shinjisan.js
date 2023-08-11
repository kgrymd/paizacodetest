
const execParallel = (...fns) => (a, b, i, arr) => fns.map(fn => fn(a, b, i, arr))
const getFirst = (acc, cv, i) => i === 0 ? cv[0] : acc[0]
const getLast = (acc, cv, i, array) => i === array.length - 1 ? cv[1] : acc[1]
const getMax = (acc, cv) => Math.max(acc[2], cv[2])
const getMin = (acc, cv) => Math.min(acc[3], cv[3])
const getAll = execParallel(getFirst, getLast, getMax, getMin)


// ---------- 実行 ----------

const initialValues = [0, 0, 0, 1000000]

const results = lines
    .slice(1)
    .map(el => el.split(' ').map(Number))
    .reduce(getAll, initialValues)

console.log(results.join(' '));
