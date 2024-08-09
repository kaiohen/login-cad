# login-cad

## Descrição
O projeto tem como funcionalidade a criação de uma tabela de usuarios seja de uma loja ou empresa que deseja listar seus clientes, contem também uma tela de login onde é possivel logar para salvar a tabela criada.

## instruções de uso 
1. Abra site no navegador
2. Faça login
3. Escreva nomes no campo de cadastro

### Para editar e excluir linhas
Para editar uma linha basta clicar no botão a baixo da coluna **ações** escrito **editar**, assim para altera o nome basta digita-lo novamente, com a intenção de excluir basta clicar no botão **excluir** também abaixo da coluna **ações**.

## tecnologias utilizadas

![Static Badge](https://img.shields.io/badge/CSS3-purple?style=for-the-badge&logo=CSS3)
![Static Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaS&logoColor=black)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

 ## Como foi criado
 ~~~JavaScrip
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
~~~

 Utilizando *function* e *if/else* foi possivel criar um codigo que verifica se o email digitado é valido ou invalido, pegando os elementos do html com "id" (*document.getElementById*) e seu valor (*.value*) e passando pelo *if e else* que se o email for invalido aparecera uma mensagem alertando, e caso for validado sera direcionado para a pagina de cadastro.
 
 ~~~JavaScript
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
~~~
 
 Pegando o valor (*.value*) digitado se estiver vazio passa pelo (*if/else*) e volta em forma de alerta (*alert*) avisando para informar um nome ao enviar e deixa o campo vazio para ser digitado.

~~~ JavaScript
function criaLista() {
  let tabela = (document.getElementById("tabela").innerHTML =
    "<tr><th>Nome Usúario</th><th>Ações</th></tr>");
  for (let i = 0; i <= dadosListas.length - 1; i++) {
    tabela +=
      "<tr><td>" +
      dadosListas[i] +
      "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)' class='btn btn-dark'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)' class='btn btn-dark'>excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
  }
}
~~~


