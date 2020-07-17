//gera efeito colateral pra fora da função
function ordenar(array) {
  return array.sort();
}

function ordenar2(array) {
  return [...array].sort();
}

const nums = [3, 1, 7, 9, 6];
let numsOrdenados = ordenar2(nums);

console.log(nums);
console.log(numsOrdenados);
