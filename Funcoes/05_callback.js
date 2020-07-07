//modulos nativos do proprio node
const fs = require("fs");
const path = require("path");

//caminho do arquivo
const caminho = path.join(__dirname, "./", "dados.txt");
console.log(caminho);

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

console.log("inicio");
//lendo um arquivo
fs.readFile(caminho, {}, exibirConteudo);
console.log("fim");

console.log("inicio sync");
//lendo um arquivo sincrono
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("fim sync");
