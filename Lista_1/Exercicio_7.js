// Um palíndromo é uma palavra, frase ou sequência de caracteres que
// se lê da mesma forma de trás pra frente (ex: arara). Sabendo disso,
// implemente uma arrow function que receba como parâmetro uma string
// e verifica se essa string é um palíndromo ou não. Em caso positivo a
// função deve retornar true e em caso negativo false.

const verificaPalindromo = (str) => {
    const stringFormatada = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const stringReversa = stringFormatada.split("").reverse().join("");
    if(stringFormatada === stringReversa){
        console.log(`O texto "${str}" é um palíndromo`)
        return;
    }
    console.log(`O texto "${str}" não é um palíndromo`)
};

verificaPalindromo("arara");
verificaPalindromo("amor");
verificaPalindromo("A man, a plan, a canal, Panama");
