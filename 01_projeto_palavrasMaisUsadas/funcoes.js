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

function elementosTermincadoCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
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

function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerSeIncluir(array, padraoTextual) {
  return array.filter((el) => !el.includes(padraoTextual));
}

function removerSeNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; //NaN
  });
}

module.exports = {
  lerDiretorio,
  elementosTermincadoCom,
  lerArquivos,
  lerArquivo,
  removerSeVazio,
  removerSeIncluir,
  removerSeNumero,
};
