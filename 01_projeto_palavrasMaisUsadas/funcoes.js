const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTermincadoCom(padrao) {
  return (array) => {
    return array.filter((el) => el.endsWith(padrao));
  };
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual, array) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerElementosSeNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; //NaN
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      let textoSemSimbolos = el;
      simbolos.forEach((simbolo) => {
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      });

      return textoSemSimbolos;
    });
  };
}

function ordenarPorAtribNumericos(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];

    return array.sort(ordem === "asc" ? asc : desc);
  };
}
module.exports = {
  lerDiretorio,
  elementosTermincadoCom,
  lerArquivos,
  lerArquivo,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeNumero,
  removerSimbolos,
  ordenarPorAtribNumericos,
};
