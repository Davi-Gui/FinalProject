import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    databaseURL: "https://william-4c1b4-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app)
const adminsInDB = ref(database,"Admins")

const butaoLogin = document.getElementById("login-button")
let where = "login"


function admin(callback) {
    onValue(adminsInDB, function (snapshot) {
        let user = document.getElementById("input-email").value;
        let adminsArray = Object.values(snapshot.val());

        for (let i = 0; i < adminsArray.length; i++) {
            if (user == adminsArray[i]) {
                callback(true); 
                return;
            }
        }

        callback(false);
    });
}
if (butaoLogin) {
butaoLogin.addEventListener("click", function () {
    firebase.auth().signInWithEmailAndPassword(
        document.getElementById("input-email").value,
        document.getElementById("input-senha").value
    ).then(response => {
        admin(function (isAdmin) {
            if (isAdmin) {
                window.location.href = "admin.html";
            } else {
                window.location.href = "cliente.html";
            }
            esconderCarregamento();
            
        });
    }).catch(error => {
        document.getElementById("input-email").value = ""
        
        esconderCarregamento();
        alert(mensagemDeErro(error));
    });
});
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

    const butaoCadastro = document.getElementById("cadastr-button");
    if (butaoCadastro) { 
        butaoCadastro.addEventListener("click", function () {
            mostrarCarregamento();
            let taBlz;
            if (senhas()) {
                
                taBlz = true;
            } else {
                alert("Preencha corretamente os campos");
                taBlz = false;
            }

            if (taBlz) {
                const email = document.getElementById("input-email-cadastro").value;
                const senha = document.getElementById("input-senha-cadastro").value;
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, senha)
                    .then(() => {
                        esconderCarregamento();
                        window.location.href = "login.html";
                    })
                    .catch((error) => {
                        esconderCarregamento();
                        alert(mensagemDeErro(error));
                    });
            }
        });
    }



