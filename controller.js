// função para validação de acesso
function checarEmail() {
  // verifica se o campo de senha esta vazio 
  let loginSenha = document.getElementById("loginSenha").value;
  if (!loginSenha) {
    alert("Favor preencher todos os campos");
    return false;
  }
  // verifica se o email é válido
  // ---------------------------------
  if (
    document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
    // ----------------------------
  ) {
    // se for inválido retorna um alerta
    alert("Por favor, informe um Email válido");
  } else {
  // se for válido redireciona para a tela de cadastro
    window.location.href = ("cadastro.html")
    return true;
  }
}
var dadosListas = [];
var dadosListasEmail = [];
// função para armazenamento de nomes em array
function salvarUser() {
  //  pega o valor digitado no input
  let nomeUser = document.getElementById("nomeUser").value;
  if (nomeUser) {
    dadosListas.push(nomeUser);
    console.log(dadosListas);
    criaLista();
    // dexa o campo vazio para ser digitado novamente
    document.getElementById("nomeUser").value = "";
  } else {
    alert("Favor informe um nome para cadastro");
  }
  //  pega o valor digitado no input
 let EmailUser = document.getElementById("EmailUser").value;
 if (EmailUser && EmailCad()) {
   dadosListasEmail.push(EmailUser);
   console.log(dadosListasEmail);
   criaLista();
   // dexa o campo vazio para ser digitado novamente
   document.getElementById("EmailUser").value = "";
 } else {
   // Se o email for inválido ou vazio, remove o email adicionado
       dadosListasEmail.pop();
    alert("Email inválido.");
 }
}
// validação do email no cadastro de usuario
function EmailCad() {
  let email = document.getElementById("EmailUser").value;
  // verifica se oque foi digitado é um email
  if (email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    return false;
  } else {
    // se for um email valido aparecera na tabela
    return true;
  }
}
//  função para criar listas de usuario
function criaLista() {
  //  pega o id da tabela no html
  let tabela = (document.getElementById("tabela").innerHTML =
    "<tr><th>Nome Usúario</th><th>Email</th><th>Ações</th></tr>");
  // pega o valor do id nomeUser e emailUser e cria uma coluna na tabela
  for (let i = 0; i <= dadosListas.length - 1; i++){
    tabela += "<tr><td>" + dadosListas[i] + "</td>"+ "<td>" + dadosListasEmail[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)' class='btn btn-dark'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)' class='btn btn-dark'>excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
  }
}
// função edição nome da lista
function editar(i) {
  document.getElementById("nomeUser").value = dadosListas[i - 1];
  document.getElementById("EmailUser").value = dadosListasEmail[i - 1];
  dadosListas.splice(dadosListas[i - 1], 1);
  dadosListasEmail.splice(dadosListasEmail[i - 1], 1);
}
// funcao para excluir nome das lista
function excluir(i) {
  dadosListas.splice((i - 1), 1);
  dadosListasEmail.splice((i - 1), 1);
  document.getElementById("tabela").deleteRow(i);
}
