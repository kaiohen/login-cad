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
