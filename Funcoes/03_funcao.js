//arrow function
const boaNoite = () => console.log("Boa noite");
boaNoite();

const saudacao = (nome) => "fala " + nome + "!!!";

console.log(saudacao("Anderson"));

const somar = (numeros) => {
  console.log(Array.isArray(numeros));
  let total = 0;
  for (let n of numeros) {
    total += n;
  }

  return total;
};

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(10)(2));
