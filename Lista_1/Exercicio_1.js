// João Papo-de-Pescador, homem de bem, comprou um computador
// para controlar o rendimento diário de seu trabalho. Toda vez que ele
// traz um peso de peixes maior que o estabelecido pelo regulamento de
// pesca do estado de Santa Catarina (50 quilos) deve pagar uma multa
// de R$ 4,00 por quilo excedente. João precisa que você programe uma
// função chamada “verificaExcesso” que receba como parâmetro o peso
// de peixes e calcule a multa que o João deve pagar. Caso não tenha
// multa, imprima uma mensagem feliz para João.
// Entrada: verificaExcesso(60)
// Saída: “Você deve pagar uma multa de R$40,00”.
// Entrada: verificaExcesso(40)
// Saída: “Parabéns! Você não tem nenhuma multa a pagar”.

function verificaExcesso(pesoPeixes) {
    const pesoLimite = 50;
    const valorMultaPorQuilo = 4;

    if (pesoPeixes > pesoLimite) {
        const pesoExcedente = pesoPeixes - pesoLimite;
        const multa = pesoExcedente * valorMultaPorQuilo;
        return `Você deve pagar uma multa de R$${multa.toFixed(2)}`;
    } else {
        return "Parabéns! Você não tem nenhuma multa a pagar.";
    }
}

console.log(verificaExcesso(60));
console.log(verificaExcesso(40)); 
