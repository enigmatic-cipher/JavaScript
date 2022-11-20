//Find perimeter of rectangle

const perimeter = (side1, side2) => {
  return (side1 + side2) * 2;
};

let s1 = 5;
let s2 = 6;
let x = perimeter(s1, s2);
console.log(`Perimeter of triangle is ${x}`);
