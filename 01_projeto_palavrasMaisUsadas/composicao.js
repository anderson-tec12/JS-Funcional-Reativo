const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");
const simbolos = [
  ".",
  "?",
  "♪",
  "-",
  ",",
  '"',
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

const mesclarElementos = (array) => array.join(" ");

const separarPorLinha = (todoConteudo) => todoConteudo.split("\n");
const separarPorPalavras = (todoConteudo) => todoConteudo.split(" ");

function agruparPalavras(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
}

fn.composicao(
  fn.lerDiretorio,
  fn.elementosTermincadoCom(".srt"),
  fn.lerArquivos,
  mesclarElementos,
  separarPorLinha,
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir("-->"),
  fn.removerElementosSeNumero,
  fn.removerSimbolos(simbolos),
  mesclarElementos,
  separarPorPalavras,
  fn.removerElementosSeVazio,
  fn.removerElementosSeNumero,
  agruparPalavras,
  fn.ordenarPorAtribNumericos("qtde", "desc")
)(caminho).then(console.log);

// fn.lerDiretorio(caminho)
//   //.then((arquivos) => fn.elementosTermincadoCom(".srt")(arquivos))
//   .then(fn.elementosTermincadoCom(".srt"))
//   // .then((arquviosSTR) => fn.lerArquivos(arquviosSTR))
//   .then(fn.lerArquivos)
//   .then(mesclarElementos)
//   .then(separarPorLinha)
//   // .then((linhas) => fn.removerSeVazio(linhas))
//   .then(fn.removerElementosSeVazio)
//   //.then((linhas) => fn.removerElementosSeIncluir("-->")(linhas)) //assim ou
//   .then(fn.removerElementosSeIncluir("-->")) //assim
//   .then(fn.removerElementosSeNumero)
//   .then(fn.removerSimbolos(simbolos))
//   .then(mesclarElementos)
//   .then(separarPorPalavras)
//   .then(fn.removerElementosSeVazio)
//   .then(fn.removerElementosSeNumero)
//   .then(agruparPalavras)
//   .then(fn.ordenarPorAtribNumericos("qtde", "desc"))
//   .then(console.log);
