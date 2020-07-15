const PI = 3.14;
// função impura, pois o PI é um valor externo
function areaCirc(raio) {
  return raio * raio * PI;
}

// função impura, pois dependemos do pi da linguaguem
function areaCirc2(raio) {
  return raio * raio * Math.PI;
}

// função pura pois nao dependemos de nada externo apenas dos parametros passados
function areaCirc3(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCirc(10));
console.log(areaCirc3(10, 3.14));
