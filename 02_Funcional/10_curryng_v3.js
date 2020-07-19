function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//console.log(somar(1)(2)(3));

function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        //lazy evaluation
        const tamanho = (texto || "").trim().length;

        if (tamanho < min || tamanho > max) {
          throw true;
        }
      };
    };
  };
}

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };

textoComTamanhoEntre(4)(255)("Nome invalido__")(p1.nome);

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto invalido");

forcarTamanhoPadrao("Nome invalido__")(p1.nome);

function aplicarValidacao(fn) {
  //lazy evaluation
  return function (valor) {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

console.log("#####################################################");

console.log(validarNomeProduto(p1.nome));
