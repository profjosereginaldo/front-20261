import "./style.css";

/*
  validar o formulario com as regras:
  - matricula > 0 e obrigatoria
  - senha tamanho > 6 caracteres e obrigatoria
*/

const matricula = document.querySelector("#matricula");
const senha = document.querySelector("#senha");
const botao = document.querySelector("button");

botao.addEventListener("click", function (e) {
  const matriculaErro = document.querySelector("#matriculaErro");
  const senhaErro = document.querySelector("#senhaErro");

  matriculaErro.textContent = '';
  senhaErro.textContent = '';

  if (matricula.value == "") {
    matriculaErro.textContent = "Matrícula é obrigatória";
    return;
  }

  if (parseInt(matricula.value) <= 0) {
    matriculaErro.textContent = "Matrícula deve ser um numero positivo";
    return;
  }

  if (senha.value == "") {
    senhaErro.textContent = "Senha é obrigatória";
    return;
  }

  if (senha.value.length < 8) {
    senhaErro.textContent = "Senha deve ter no mínimo 8 caracteres";
    return;
  }
});
