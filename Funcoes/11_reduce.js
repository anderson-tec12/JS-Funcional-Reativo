const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;

const totalGeral = carrinho.map(getTotal);
console.log(totalGeral);

const soma = (acc, ele) => acc + ele;

const totalGeralReduce = carrinho.map(getTotal).reduce(soma);
console.log(totalGeralReduce);
