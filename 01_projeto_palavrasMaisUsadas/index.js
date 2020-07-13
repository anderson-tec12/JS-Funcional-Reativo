const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTermincadoCom(arquivos, ".srt"))
  .then((arquviosSTR) => fn.lerArquivos(arquviosSTR))
  .then(console.log);
