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
  return palavras.reduce((agrupamento, palavra) => {
    const p = palavra.toLowerCase();
    if (agrupamento[p]) {
      agrupamento[p] += 1;
    } else {
      agrupamento[p] = 1;
    }

    return agrupamento;
  }, {});
}

fn.lerDiretorio(caminho)
  //.then((arquivos) => fn.elementosTermincadoCom(".srt")(arquivos))
  .then(fn.elementosTermincadoCom(".srt"))
  // .then((arquviosSTR) => fn.lerArquivos(arquviosSTR))
  .then(fn.lerArquivos)
  .then(mesclarElementos)
  .then(separarPorLinha)
  // .then((linhas) => fn.removerSeVazio(linhas))
  .then(fn.removerElementosSeVazio)
  //.then((linhas) => fn.removerElementosSeIncluir("-->")(linhas)) //assim ou
  .then(fn.removerElementosSeIncluir("-->")) //assim
  .then(fn.removerElementosSeNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(mesclarElementos)
  .then(separarPorPalavras)
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeNumero)
  .then(agruparPalavras)
  .then(console.log);
