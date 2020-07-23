const familia = [
  ["a", "n", "d", ["e", "r"], "s", "o", "n"],
  [""],
  ["m", "i", "v", "a", "n", "e"],
];

console.log(familia);
console.log(familia.flat());
console.log(familia.flat().flat());
console.log(familia.flat(2));
console.log(familia.flat(Infinity));
