import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    databaseURL: "https://teste-3c552-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const datebase = getDatabase(app)
const userInDB = ref(datebase,"users")
const senhasInDB = ref(datebase,"senhas")

const usersValue = Object.values(userInDB)
const senhasValue = Object.values(senhasInDB)

const userInput = document.getElementById("input-email")
const senhaInput = document.getElementById("input-senha")

onValue(userInDB, function(snapshot)
{
    let usersValueArray = Object.values(snapshot.val())
    console.log(usersValueArray)

    onValue(senhasInDB, function(snapshot)
{
    let senhasValueArray = Object.values(snapshot.val())
    console.log(senhasValueArray)

    butaoLogin.addEventListener("click",function(){
        
        const userInputValue = userInput.value
        const senhaInputValue = senhaInput.value
        for (let i = 0; i < usersValue.length; i++)
        {
            if (userInputValue == usersValueArray[i] )
            {
    
                if (senhaInput == senhasValueArray[i])
                {
                    alert("deu certo ladrao")
                }
                
            }
        }
    })
})

})

const butaoLogin = document.getElementById("login-button")




function login()
{
    alert("teste")
}