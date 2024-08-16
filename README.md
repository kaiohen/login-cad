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
    // console.log(dadosListas);
    criaLista();
    document.getElementById("nomeUser").value = "";
  } else {
    alert("Favor informe um nome para cadastro");
  }
}
~~~
 
 Pega o que digitado no *input* e adiciona ao *array* (*push*) e com a função *crialista()* cria uma linha na tabela com o nome digitado, se nada for digitado sera avisado em forma de alerta (*alert*), avisando para informar um nome ao enviar.

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
 Esta função esta pegando o conteúdo do HTML com o *id* "tabela"(*innerHTML*) e o *Array* e cria uma nova linha na tabela utilizando *<tr>* e *<td>* com os valores da variavel (*var*) *dadosListas* e fazendo uma adição de dois botões, que  permitem excluir e editar os nomes.

~~~JavaScript
 function editar(i) {
  document.getElementById("nomeUser").value = dadosListas[i - 1];
  dadosListas.splice(dadosListas[i - 1], 1);
}
~~~
 Esta função esta fazendo o botão de edição ser funcional com a utilização do metodo *splice* que permite alterar ou remover elementos de um *array* pela sua posição.

~~~JavaScript
function excluir(i) {
  dadosListas.splice((i - 1), 1);
  document.getElementById("tabela").deleteRow(i);
}
~~~
 Permite excluir uma linha da tabela (*deleteRow()*) e também apaga a posição do *Array* correspondente a linha.


 ## Imagens do projeto

![image](https://github.com/user-attachments/assets/83785694-2546-4c29-99b6-38f5178ac917)

![image](https://github.com/user-attachments/assets/8a09d4de-247c-4768-8825-bec9c56f3054)
