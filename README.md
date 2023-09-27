# FinalProject

(x) = Problema
(1) = Problema 1

!! Mudanças (JP) - 23/09 - 19:23 !!
    -> Geral: 
        Mudei a forma como o cadastro funciona:
            - Quando o user clicar em cadastrar:
                * É criado um novo campo de input 
                * Esse novo campo é identico aos outros
                * Muda o texto do titulo
                * Muda o texto do butao
    -> Html
        * Adicionei id ao texto do titulo (pra poder muda-lo)
        * Adicionei id ao botao (pra poder muda-lo)
        * Adicionei um onclick ao texto de cadastro

    -> Css
        * Ao passar o mouse no texto de cadastrar o cursor muda
        (2)
    -> JavaScript
        Funções: 
            - criarCampoInput ()
                * Essa função leva alguns parametros (pra criar um clone dos outros campos de input)
                * Retorna um novo campo de input
            - cadastrar()
                * Cria uma variavel com a função anterior
                * Muda o texto do titulo
                * Muda o texto do butao
                * Aumenta o tamanho do negocio la, pra poder suportar o novo elemento
                * Cria o novo input antes do input de email
                * (1) Muda a propriedade do butao (onclick)
            - registrarConta()
                * ...

    -> Problemas
        (1) - O botão não esta funcionando direito, ele nao chama a função que deveria chamar (registrarConta()), provavelmente porque:
                * Nao é realmente um botão, é um input type submit
                    eu ACHO que o submit meio que reescreve por cima da propriedade onclick
            - Nao mudei já que nao queria mudar nada no html e css  
                saber o que vc (Davi) acha, ja que foi vc que fez tudo
        
        (2) - Nao é beeemm um problema, é so que vc deixou um espaço vazio na linha 110 
            (
                form a:hover {
                  color: ;
                            }
            )

!! Mudanças (JP) - 27/09 - 19:23 !!
    -> Geral:
        Desisti de criar elementos ao clicar em criar cadastro;
        Implementei o login e cadastro (1);
    
    -> Html:
        * "Criei" uma nova página pra cadastro
        * Em login.html, mudei o <input type="button"> pra <button>
        * Adicionei scripts:
             <script src="scrpits.js" ></script>
                (Arquivo proprio, meio inutil agr)
             <script src="autentication.js"></script>
                (Arquivo proprio, cria as funções de login e cadastro)
             <script src="carregando.js"></script>
                (Animação de loading)
             <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js"></script>
                (Arquivo externo, importa funções do Firebase)
             <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-auth-compat.js"></script>
                (Arquivo externo, importa funções do Firebase)
             <script src="firebase-init.js"></script>
                (Inicia Firebase)

    -> CSS:
        Adicionei uma classe pra lidar com a animação de loading

    -> JavaScript
        - autentication.js
            *function login () 
                (Usa a função auth() do Firebase pra enviar os dados dos inputs para o banco de dados, testa se esta tudo correto, se sim, envia o usuario para a tela principal (2), se não, mostra o erro)
            * function senhas()
                (Testa se a senha e a confirmação da senha (cadastro) são iguais)
            *function function cadastrarNovoUser()
                (Usa a função auth() do Firebase pra enviar os dados dos inputs para o banco de dados, se tudo der certo, envia o user pra tela de login)
        
        - carregando.js
            *function mostrarCarregamento()
                (Cria o elemento <div> pra animação de loading)
            *function esconderCarregamento()
                (Apaga o elemento <div>)

    -> Problemas
        (Geral) - O código ta porco.
        
        (1) - Não há alternação entre o admin e user normal

        (2) - Não há alternação entre o admin e user normal