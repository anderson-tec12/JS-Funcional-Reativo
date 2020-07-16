//função impura, pois ha uma depedencia externa, Math.random() valor aleatorio
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 6));
console.log(gerarNumeroAleatorio(1, 6));
console.log(gerarNumeroAleatorio(1, 6));
console.log(gerarNumeroAleatorio(1, 6));
console.log(gerarNumeroAleatorio(1, 6));
console.log(gerarNumeroAleatorio(1, 6));
