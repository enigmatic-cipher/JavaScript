//Convert hours into seconds.

const hrToSec = (hours) => {
  return hours * 60 * 60;
};

let h = 2;
let x = hrToSec(h);
console.log(`${h} hrs into seconds = ${x} sec`);
