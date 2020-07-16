function executar(fn, ...params) {
  return fn(...params);
}

function somar(a, b, c) {
  return a + b + c;
}

function multi(a, b) {
  return a * b;
}

console.log(executar(somar, 4, 5, 6));
console.log(executar(multi, 5, 6));
