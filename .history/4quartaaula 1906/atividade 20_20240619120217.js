//9) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123".
// Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!",
// caso contrário "Login falhou!".
// (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

var usuario = String(prompt('Digite seu nome de usuário: '));
var senha = String(prompt('Digite sua senha: '));

if (usuario === 'admin' && senha === '123') {
    alert('Login efetuado!');
} else {
    if (usuario !== 'admin' && senha !== '123') {
        alert('Nome de usuário e senha incorretos!');
    } else if (usuario !== 'admin') {
        alert('Nome de usuário incorreto!');
    } else {
        alert('Senha incorreta!');
    }
} 
