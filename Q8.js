// Power calculator(takes voltage and current to calculate power)

const powerCalc = (voltage, current) => {
  return voltage * current;
};

let v = 230;
let i = 10;
let x = powerCalc(v, i);
console.log(`Power is ${x} watt`);
