// Crie uma arrow function que receba como parâmetro um valor inteiro
// ímpar, que representa o valor máximo, e imprima uma pirâmide
// invertida na saída, conforme apresentado abaixo. Para esse exemplo o
// valor utilizado foi o 9.
// 1 2 3 4 5 6 7 8 9
// 2 3 4 5 6 7 8
// 3 4 5 6 7
// 4 5 6
// 5

const imprimirPiramideInvertida = (valorMaximo) => {
    if (valorMaximo % 2 === 0) {
        console.log("O valor deve ser ímpar.");
        return;
    }

    const listaNumeros = [];

    for (let i = 1; i <= valorMaximo; i += 1) {
        listaNumeros.push(i);
    }

    while (listaNumeros.length > 0) {
        const linha = listaNumeros.join(" ");
        console.log(linha);
        listaNumeros.pop();
        listaNumeros.shift();
    }
};

const valorImpar = 9;
imprimirPiramideInvertida(valorImpar);
