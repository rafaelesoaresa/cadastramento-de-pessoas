const aluno1 = new Aluno("Maria Santos", 25, "2023001", "Engenharia Civil");

document.getElementById("nomeAluno").textContent = `${aluno1.primeiroNome} ${aluno1.sobreNome}`;
document.getElementById("idadeAluno").textContent = aluno1.idade;
document.getElementById("matriculaAluno").textContent = aluno1.matricula;
document.getElementById("cursoAluno").textContent = aluno1.curso;


