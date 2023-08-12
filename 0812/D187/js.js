
lines = ["Programming", "Paiza"];


// const createDisplayFormat = input => input.join("/")

const createDisplayFormat = ([title, singer]) => `${title}/${singer}`

console.log(createDisplayFormat(lines));

