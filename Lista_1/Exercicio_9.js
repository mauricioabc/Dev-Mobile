// Implemente uma arrow function que receba como parâmetro duas
// strings e diga se elas são anagramas ou não. Um anagrama é uma
// palavra ou frase formada pelo rearranjo de letras de outra palavra ou
// frase. As duas strings fornecidas como parâmetro devem possuir
// exatamente as mesmas letras, mas em ordem diferente, para serem
// consideradas anagramas. A função deve retornar true em caso positivo
// e false caso contrário.
// Entrada: verificaAnagrama(“amor”, “roma”);
// Saída: true
// Entrada: verificaAnagrama(“Hello”, “World”);
// Saída: false

const verificaAnagrama = (str1, str2) => {
    const formatarString = (str) => str.toLowerCase().replace(/[^a-zA-Z]/g, "");

    const strFormatada1 = formatarString(str1);
    const strFormatada2 = formatarString(str2);

    if (strFormatada1.length !== strFormatada2.length) {
        console.log(`Os textos "${str1}" e "${str2}" não configuram um anagrama`)
        return
    }

    const mapaLetras = {};

    for (const char of strFormatada1) {
        mapaLetras[char] = (mapaLetras[char] || 0) + 1;
    }

    for (const char of strFormatada2) {
        if (!mapaLetras[char]) {
            console.log(`Os textos "${str1}" e "${str2}" não configuram um anagrama`)
            return
        }
        mapaLetras[char]--;
    }
    console.log(`Os textos "${str1}" e "${str2}" configuram um anagrama`)
};

verificaAnagrama("amor", "roma");
verificaAnagrama("Hello", "World");
verificaAnagrama("listen", "silent");