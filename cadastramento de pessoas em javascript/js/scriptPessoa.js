// scriptPessoa.js
const pessoa1 = new Pessoa("João", "Silva", 30);

document.getElementById("nomePessoa").textContent = `${pessoa1.primeiroNome} ${pessoa1.sobreNome}`;
document.getElementById("idadePessoa").textContent = pessoa1.idade;
