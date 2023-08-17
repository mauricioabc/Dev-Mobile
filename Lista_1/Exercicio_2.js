// Implemente uma função chamada “conversorDeTemperatura” que
// recebe como parâmetro a temperatura, a escala de entrada e a escala
// de saída. As escalas suportadas pela função são: Celsius (C),
// Fahrenheit (F) e Kelvin (K). A função deve retornar o valor convertido
// da temperatura de acordo com a escala indicada ou -1 caso a escala
// utilizada não seja suportada.
// As fórmulas de conversão são as seguintes:
// Celsius (C) para Fahrenheit (F): F = C * (9/5) + 32
// Celsius (C) para Kelvin (K): K = C + 273,15
// Fahrenheit (F) para Celsius (C): C = (F - 32) * 5/9
// Instituto Federal de Santa Catarina
// Campus Lages
// Disciplina de Desenvolvimento para Dispositivos Móveis
// Fahrenheit (F) para Kelvin (K): K = (F - 32) * (5/9) + 273,15
// Kelvin (K) para Celsius (C): C = K - 273,15
// Kelvin (K) para Fahrenheit (F): F = (K - 273,15) * (9/5) + 32
// Entrada: conversorDeTemperatura(25, “C”, “F”)
// Saída: 77
// Entrada: conversorDeTemperatura(300, “K”, “C”)
// Saída: 26.85
// Entrada: conversorDeTemperatura(50, “R”, “K”)
// Saída: -1

function conversorDeTemperatura(temperatura, escalaEntrada, escalaSaida) {
    escalaEntrada = escalaEntrada.toUpperCase();
    escalaSaida = escalaSaida.toUpperCase();

    const escalasSuportadas = ["C", "F", "K"];
    if (!escalasSuportadas.includes(escalaEntrada) || !escalasSuportadas.includes(escalaSaida)) {
        return -1;
    }

    let temperaturaConvertida = 0;

    if (escalaEntrada === "C") {
        if (escalaSaida === "F") {
            temperaturaConvertida = temperatura * (9 / 5) + 32;
        } else if (escalaSaida === "K") {
            temperaturaConvertida = temperatura + 273.15;
        }
    } else if (escalaEntrada === "F") {
        if (escalaSaida === "C") {
            temperaturaConvertida = (temperatura - 32) * 5 / 9;
        } else if (escalaSaida === "K") {
            temperaturaConvertida = (temperatura - 32) * 5 / 9 + 273.15;
        }
    } else if (escalaEntrada === "K") {
        if (escalaSaida === "C") {
            temperaturaConvertida = temperatura - 273.15;
        } else if (escalaSaida === "F") {
            temperaturaConvertida = (temperatura - 273.15) * 9 / 5 + 32;
        }
    }

    return temperaturaConvertida;
}

console.log(conversorDeTemperatura(25, "C", "F"));
console.log(conversorDeTemperatura(300, "K", "C"));
console.log(conversorDeTemperatura(50, "R", "K"));
