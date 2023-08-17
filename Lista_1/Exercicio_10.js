// Implemente uma arrow function que valide senhas de acordo com os
// seguintes critérios:
// - Deve ter no mínimo 8 caracteres;
// - Deve conter pelo menos uma letra maiúscula;
// - Deve conter pelo menos uma letra minúscula;
// - Deve conter pelo menos um número;
// - Deve conter pelo menos um caracter especial(@, #, $, %, !, * e etc)
// A função deve retornar true se senha atender a todos os critérios e false
// caso contrário. Dica: utilize expressões regulares.
// Entrada: validarSenha(‘Senha123#’);
// Saída: true
// Entrada: validarSenha(‘senha123’)
// Saída: false

const validarSenha = (senha) => {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    return (
        senha.length >= 8 &&
        regexMaiuscula.test(senha) &&
        regexMinuscula.test(senha) &&
        regexNumero.test(senha) &&
        regexCaracterEspecial.test(senha)
    );
};

console.log("Validação: " + validarSenha("Senha123#"));
console.log("Validação: " + validarSenha("senha123"));
console.log("Validação: " + validarSenha("P@ssw0rd"));
console.log("Validação: " + validarSenha("Comple#12"));
