const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "./", "dados.txt");

const lerArquivo = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo);
    });
  });
};

lerArquivo(caminho)
  .then((dados) => {
    return dados.toString();
  })
  .then(console.log);
