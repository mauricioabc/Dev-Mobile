// Crie uma arrow function que receba como parâmetro o tempo de
// duração de um evento em segundos e mostre-o expresso em horas,
// minutos e segundos.

const converterTempo = (tempoEmSegundos) => {
    const segundosPorMinuto = 60;
    const minutosPorHora = 60;

    const horas = Math.floor(tempoEmSegundos / (minutosPorHora * segundosPorMinuto));
    const minutos = Math.floor((tempoEmSegundos % (minutosPorHora * segundosPorMinuto)) / segundosPorMinuto);
    const segundos = tempoEmSegundos % segundosPorMinuto;

    return `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
};

const tempoTotal = 90;
const tempoFormatado = converterTempo(tempoTotal);
console.log(tempoFormatado);
