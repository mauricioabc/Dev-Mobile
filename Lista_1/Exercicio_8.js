// A criptografia de césar é um método de criptografia no qual cada letra é
// substituída pela letra que está a uma determinada quantidade de
// posições a frente ou atrás no alfabeto. Implemente uma arrow function
// que receba como parâmetro a string a ser criptografada e o número de
// deslocamento, e retorne a string criptografada.

const criptografiaCesar = (str, deslocamento) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const alfabetoMaiusculo = alfabeto.toUpperCase();

    let resultado = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (alfabeto.includes(char)) {
            const index = (alfabeto.indexOf(char) + deslocamento) % 26;
            resultado += alfabeto[index];
        } else if (alfabetoMaiusculo.includes(char)) {
            const index = (alfabetoMaiusculo.indexOf(char) + deslocamento) % 26;
            resultado += alfabetoMaiusculo[index];
        } else {
            resultado += char;
        }
    }

    return resultado;
};

console.log(criptografiaCesar("hello", 3));
console.log(criptografiaCesar("OpenAI", 5));
console.log(criptografiaCesar("xyz", 1));