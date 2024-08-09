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

// função para armazenamento de nomes em array
var dadosListas = [];
function salvarUser() {
   let nomeUser = document.getElementById("nomeUser").value;
   if (nomeUser) {
        dadosListas.push(nomeUser);     
        console.log(dadosListas);
        criaLista();
        document.getElementById("nomeUser").value = "";
    } else {
  alert("Favor informe um nome para cadastro");
 }
 }
//  função para criar listas de usuario
 function criaLista() {
  //  pega o id da tabela no html
  let tabela = (document.getElementById("tabela").innerHTML = "<tr><th>Nome Usúario</th><th>Ações</th></tr>");
  // pega o valor do id nomeUser e cria uma coluna na tabela
  for (let i = 0; i <= dadosListas.length - 1; i++) {
    tabela += "<tr><td>" + dadosListas[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)' class='btn btn-dark'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)' class='btn btn-dark'>excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
 }
}
