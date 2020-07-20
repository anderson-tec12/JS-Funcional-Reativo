function eager(a, b) {
  //processament mais pessado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(a, 3);
  return valor + b;
}

//lazy evaluation
function eagerLazy(a, b) {
  //processament mais pessado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(a, 3);

  return function (b) {
    return valor + b;
  };
}

console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1");

console.time("#2");
const lazy = eagerLazy(3);
console.log(lazy(100));
console.log(lazy(200));
console.log(lazy(300));
console.timeEnd("#2");
