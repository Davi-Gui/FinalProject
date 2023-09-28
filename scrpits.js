
function criarCampoInput(id, inputClass, labelFor, labelText, isRequired) {
    
    /*
        -Aceita os parametros pra criar um input identico aos outros
        -Cria uma nova area de input para o usuario conseguir 
        criar sua conta
        - (Acho melhor doq mandar para uma nova pagina)
    */
    
     // Seleciona o elemento de titulo da pagina (Login ou Cadastro)
    let newText = document.getElementById("title")
    // Muda o conteudo de texto 
    newText.innerText = "Cadastro"
    
     // Criar variavel para o novo elemento input (durrhhh)
    var divInputNome = document.createElement("div");
    divInputNome.classList.add("input-single");

    // Cria o elemento input
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.id = id;
    inputElement.classList.add("input", inputClass);


    //  Setar o atributo de requerimento
    if (isRequired) {
        inputElement.setAttribute("required", "required");
    }

    // Cria o label
    var labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.innerText = labelText;

    // Adiciona o input e o label 
    divInputNome.appendChild(inputElement);
    divInputNome.appendChild(labelElement);

    // Retorna a div criada
    return divInputNome;
}
function teste ()
{
    alert("cu")
}
function cadastrar()
{

// chama a função

var novoCampo = criarCampoInput("input-nome", "input", "input", "Nome", true);

// Colocar o elemento <input> no lugar certo (antes do email)
 var position = document.querySelector(".input-email")
 position.parentNode.insertBefore(novoCampo, position)

// Tira o texto de castrar

var cadastrarTexto = document.getElementById("cadastrar-text")
cadastrarTexto.innerText = ""

 // Aumentar o tamanho do container para suportar os novos elementos
 var container = document.getElementById("formulario")
 container.style.height = "520px"

 // Muda umas propriedades do butao
 var butao = document.getElementById("butao")
 butao.setAttribute("value","Criar conta")
 butao.setAttribute("onclick","registrarConta")


}

function registrarConta()
{
    alert("penis")
}

function registrar ()
{
    window.location.href = "cadastro.html"
}