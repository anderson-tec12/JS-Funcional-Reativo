const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
  //.then((arquivos) => fn.elementosTermincadoCom(".srt")(arquivos))
  .then(fn.elementosTermincadoCom(".srt"))
  // .then((arquviosSTR) => fn.lerArquivos(arquviosSTR))
  .then(fn.lerArquivos)
  .then((conteudos) => conteudos.join("\n"))
  .then((todoConteudo) => todoConteudo.split("\n"))
  // .then((linhas) => fn.removerSeVazio(linhas))
  .then(fn.removerElementosSeVazio)
  //.then((linhas) => fn.removerElementosSeIncluir("-->")(linhas)) //assim ou
  .then(fn.removerElementosSeIncluir("-->")) //assim
  .then(fn.removerElementosSeNumero)
  .then(console.log);
