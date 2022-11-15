// Convert Minutes into Seconds

const minToSec = (min) => {
  return min * 60;
};

let x = 30;
let y = minToSec(x);
console.log(`${x} minutes in seconds = ${y} sec`);
