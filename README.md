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
// função para validação de acesso
function checarEmail() {
  // verifica se o campo de senha esta vazio 
  let loginSenha = document.getElementById("loginSenha").value;
  if (!loginSenha) {
    alert("Favor preencher todos os campos");
    return false;
~~~
 Essa parte do código verifica se o campo de senha foi preenchido. Utilizando a *let* para criar uma variável que armazena o valor do elemento HTML com o id (*document.getElementById*). Em seguida, o valor dessa variável passa pelo *if e else*. Se o campo estiver vazio, um alerta (*alert*) será exibido para avisar o usuário a preencher o campo de senha.
 
 (**'continuação do codigo'**)
  ~~~JavaScrip
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
~~~
 Acessa o formulário da página usando _document.forms[0]_ e obtém o valor do campo de _input_ com o nome email. Verificando se o campo está vazio ou se o e-mail inserido é válido, como por exemplo, *exemplo@gmail.com*. O código examina o e-mail digitado para garantir que contenha tanto o símbolo "**@**" quanto o ponto "**.**". Se qualquer um desses elementos estiver ausente, o usuário será solicitado a fornecer um e-mail válido. Caso o e-mail seja considerado válido, o usuário será redirecionado para a página de cadastro utilizando *window.location.href = "cadastro.html"*.
 
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
 
 O código captura o valor digitado no campo de input e o adiciona a um _array_ usando o método _push()_. Em seguida, a função _criaLista()_ é chamada para criar uma nova linha na tabela com o nome digitado. Se o campo estiver vazio, um alerta (_alert_) será exibido, solicitando ao usuário que informe um nome antes de enviar.

(**'continuação do codigo'**)
~~~JavaScript
  //  pega o valor digitado no input
 let EmailUser = document.getElementById("EmailUser").value;
 if (EmailUser && EmailCad()) {
   dadosListasEmail.push(EmailUser);
   // console.log(dadosListasEmail);
   criaLista();
   // dexa o campo vazio para ser digitado novamente
   document.getElementById("EmailUser").value = "";
 } else {
   // Se o email for inválido ou vazio, remove o email adicionado
    alert("Email inválido.");
 }
}
~~~
 O código captura o valor digitado no _input_ com o _id_ EmailUser e, após verificar se o e-mail é válido usando a função _EmailCad()_, adiciona-o ao array com o método _push_. Em seguida, a função _criaLista()_ é chamada para inserir o e-mail na tabela.

~~~JavaScript
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
~~~
 A função verifica se o e-mail digitado contém os caracteres **"@"** e **"."**. Se algum desses caracteres estiver ausente, a função retorna _false_(_return false_), indicando que o e-mail é inválido. Se o e-mail for válido, a função retorna _true_(_return true_), permitindo que ele seja adicionado à tabela.
 ~~~ JavaScript
function criaLista() {
  let tabela = (document.getElementById("tabela").innerHTML =
    "<tr><th>Nome Usúario</th><th>Email</th><th>Ações</th></tr>");
  for (let i = 0; i <= dadosListas.length - 1; i++) {
     tabela += "<tr><td>" + dadosListas[i] + "</td>"+ "<td>" + dadosListasEmail[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)' class='btn btn-dark'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)' class='btn btn-dark'>excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
  }
}
~~~
 Essa função acessa o conteúdo do elemento HTML com o _id_ "tabela" utilizando _innerHTML_ e percorre o _array_ dadosListas e dadosListasEmail para criar novas linhas na tabela (_<tr>_), inserindo os valores armazenados no _array_ dentro de células (_<td>_). Além disso, adiciona dois botões em cada linha, permitindo ao usuário excluir ou editar os nomes.

~~~JavaScript
 function editar(i) {
  document.getElementById("nomeUser").value = dadosListas[i - 1];
  document.getElementById("EmailUser").value = dadosListasEmail[i - 1];
  dadosListas.splice(dadosListas[i - 1], 1);
  dadosListasEmail.splice(dadosListasEmail[i - 1], 1);
}
~~~
 Esta função esta fazendo o botão de edição ser funcional com a utilização do metodo *splice* que permite alterar ou remover elementos de um *array* pela sua posição.

~~~JavaScript
function excluir(i) {
  dadosListas.splice((i - 1), 1);
  dadosListasEmail.splice((i - 1), 1);
  document.getElementById("tabela").deleteRow(i);
}
~~~
 Permite excluir uma linha da tabela (*deleteRow()*) e também apaga a posição do *Array* correspondente a linha.


 ## Imagens do projeto

![image](https://github.com/user-attachments/assets/83785694-2546-4c29-99b6-38f5178ac917)

![image](https://github.com/user-attachments/assets/c40d8293-ba52-4401-980c-e151d59f5d1c)

