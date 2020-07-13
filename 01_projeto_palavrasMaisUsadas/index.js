const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTermincadoCom(arquivos, ".srt"))
  .then((arquviosSTR) => fn.lerArquivos(arquviosSTR))
  .then((conteudos) => conteudos.join("\n"))
  .then((todoConteudo) => todoConteudo.split("\n"))
  .then((linhas) => fn.removerSeVazio(linhas))
  .then((linhas) => fn.removerSeIncluir(linhas, "-->"))
  .then(console.log);
