const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho).then(console.log);
