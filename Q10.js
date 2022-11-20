//Maximum edge of triangle.

const maxEdge = (side1, side2) => {
  return side1 + side2 - 1;
};

let s1 = 10;
let s2 = 7;
let x = maxEdge(s1, s2);
console.log(`Max Edge of triangle = ${x}`);
