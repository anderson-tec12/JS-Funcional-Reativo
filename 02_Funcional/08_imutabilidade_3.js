const pessoa = {
  nome: "Mivane",
  altura: "1.60",
  cidade: "Diadema",
};

function gerarNovaPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "Anderson B. Silva";
  novaPessoa.altura = "1.69";

  return novaPessoa;
}

//atribuição por referencia
// const pessoaNova = pessoa;
// pessoaNova.cidade = "São Paulo";
// pessoaNova.nome = "Anderson";

console.log(pessoa);
console.log(gerarNovaPessoa(pessoa));
