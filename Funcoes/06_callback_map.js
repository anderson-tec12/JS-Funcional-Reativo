const nums = [1, 2, 3, 4, 5];

const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const nomes = ["Anderson", "Mivane", "Raphael", "Davi", "Gabriel"];
const primeiraLetra = (texto) => texto[0];

console.log(nomes.map(primeiraLetra));
