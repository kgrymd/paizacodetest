const lines = 3
const initial_state = false;
let currentStatus = initial_state;
const switching = (currentStatus, n) => n % 2 == 0 ? currentStatus : !currentStatus;

const getOnOrOff = currentStatus => currentStatus ? "On" : "Off";

console.log(getOnOrOff(switching(currentStatus, lines[0])));