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