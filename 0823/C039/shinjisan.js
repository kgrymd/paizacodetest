


const dict = { '/': 1, '<': 10, '+': 0 }
const sum = str => [...str].reduce((a, b) => a + dict[b], 0)
// console.log(sum(lines[0]))


lines = ['<///////+<<</+////'];
console.log([...lines[0]])