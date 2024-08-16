// função para validação de acesso
function acessar() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginSenha = document.getElementById("loginSenha").value;
  if (!loginEmail || !loginSenha) {
    alert("Favor preencher todos os campos");
  } else {
    // alert("Campos preenchidos com sucesso");
    window.location.href = "cadastro.html";
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
 if (EmailUser) {
   dadosListasEmail.push(EmailUser);
   console.log(dadosListasEmail);
   criaLista();
   // dexa o campo vazio para ser digitado novamente
   document.getElementById("EmailUser").value = "";
 } else {
   alert("Favor informe um email para cadastro");
 }
}
//  função para criar listas de usuario
function criaLista() {
  //  pega o id da tabela no html
  let tabela = (document.getElementById("tabela").innerHTML =
    "<tr><th>Nome Usúario</th><th>Email</th><th>Ações</th></tr>");
  // pega o valor do id nomeUser e cria uma coluna na tabela
  for (let i = 0; i <= dadosListas.length - 1; i++){
    tabela += "<tr><td>" + dadosListas[i] + "</td>"+ "<td>" + dadosListasEmail[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)' class='btn btn-dark'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)' class='btn btn-dark'>excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
  }
}
// função edição nome da lista
function editar(i) {
  document.getElementById("nomeUser").value = dadosListas[i - 1];
  dadosListas.splice(dadosListas[i - 1], 1);
}
// funcao para excluir nome das lista
function excluir(i) {
  dadosListas.splice((i - 1), 1);
  document.getElementById("tabela").deleteRow(i);
}
