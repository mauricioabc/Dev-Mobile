// Chico tem 1,50 metros de altura e cresce 2 centímetros por ano,
// enquanto Zé tem 1,10 metros e cresce 3 centímetros por ano. Crie uma
// função anônima que descubra e retorne quantos anos serão
// necessários para que Zé seja maior que Chico.

const calculaAnos = function() {
    let alturaChico = 1.50;
    let alturaZé = 1.10;
    let anos = 0;

    while (alturaZé <= alturaChico) {
        alturaChico += 0.02;
        alturaZé += 0.03;
        anos++;
    }

    return anos;
};

const anosNecessarios = calculaAnos();
console.log(`Serão necessários ${anosNecessarios} anos para que Zé seja maior que Chico.`);
