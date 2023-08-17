// Crie uma função anônima que receba como parâmetro a data de
// nascimento de uma pessoa (dia, mês e ano) e retorne a idade da
// pessoa expressa em dias. Considere que os meses têm 30 dias e os
// anos 365.
// Entrada: idadeEmDias(12, 06, 1991)
// Saída: 11639

const idadeEmDias = function(diaNascimento, mesNascimento, anoNascimento) {
    const diasPorAno = 365;
    const diasPorMes = 30;

    const hoje = new Date();
    const dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);

    const diferencaTempo = hoje - dataNascimento;
    const idadeDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    return idadeDias;
};

const dias = idadeEmDias(12, 6, 1991);
console.log(dias);
