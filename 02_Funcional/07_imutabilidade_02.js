const nums = [4, 8, 3, 2, 9, 1, 9, 3];

//#1 dadosmutaveis
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(total);

//#2 reduce, extrategigia funcional, codigo mais implicito

const totalReduce = nums.reduce((a, b) => a + b);
console.log(totalReduce);

// #3 - Recursividade
function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }

  return somarArray(array.slice(1), total + array[0]);
}

console.log(somarArray(nums));
