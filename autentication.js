function login ()
{
    firebase.auth().signInWithEmailAndPassword
    (document.getElementById("input-email").value,document.getElementById("input-senha").value).then(response => {
        window.location.href = "cliente.html"
        esconderCarregamento()
    }).catch(error => {
        esconderCarregamento()
        alert(mensagemDeErro(error))
    })
} 

function mensagemDeErro(error)
{
    if (error.code == "auth/user-not-found")
    {
        return "Usuario não encontrado"
    }
    return error.message
}

function senhas()
{
    const senha1 = document.getElementById("input-senha-cadastro")
    const senha2 = document.getElementById("input-senha-cadastro-confirmar")

    alert(senha1.value)
    if (senha1.value == senha2.value)
        return true

    return false
}

function cadastrarNovoUser()
{
    mostrarCarregamento()
    let taBlz 
    if (senhas()){
        alert ("ta beleza")
        taBlz = true
        
    }
    else if (!senhas()){
        alert("ta ruijm")
        taBlz = false
    }


    if (taBlz)
    {
    const email = document.getElementById("input-email-cadastro").value
    const senha = document.getElementById("input-senha-cadastro").value
    firebase.auth().createUserWithEmailAndPassword
    (email,senha
    ).then(() => {
        esconderCarregamento()
        window.location.href = "login.html"
    }).catch(error =>{
        esconderCarregamento()
        alert(mensagemDeErro(error))
    })
    
    
}
}
