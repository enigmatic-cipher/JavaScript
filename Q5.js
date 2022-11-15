// Convert Age to Days

/*Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now. */

const ageToDays = (age) => {
  return age * 365;
};

let a = 15;
let x = ageToDays(a);
console.log(`${a} years = ${x} days`);
