import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, set, ref, push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    databaseURL: "https://william-4c1b4-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app)
const adminsInDB = ref(database,"Admins")


const emailColuna = document.getElementById("email-admins");
const idColuna = document.getElementById("id-admins");

if (emailColuna && idColuna) {

     onValue(adminsInDB, function (snapshot) {
    if (snapshot.exists()) {
      let adminsArray = Object.values(snapshot.val());
      let admindsIDArray = Object.keys(snapshot.val());
      
      for (let i = 0; i < adminsArray.length; i++) {
        let email = adminsArray[i];
        let id = admindsIDArray[i];
        
        let linha = document.createElement("tr");
        
        let emailCelula = document.createElement("td");
        emailCelula.textContent = email;
        
        let idCelula = document.createElement("td");
        idCelula.textContent = id;
        
        let removeButton = document.createElement("button")
        removeButton.addEventListener("click", function(){
            let location = ref(database, `Admins/${id}`)
            remove(location)
        })
        removeButton.classList.add("remove")
        removeButton.textContent = 'X'
        idCelula.appendChild(removeButton)

        linha.appendChild(emailCelula);
        linha.appendChild(idCelula);

        emailColuna.parentElement.parentElement.appendChild(linha);
      }
    }
  });
}   

const addButton = document.getElementById("butaoAdminADD")
const removeButton = document.getElementById("butaoAdminREMOVE")

var adminID = document.getElementById("removeAdmin")
var newAdmin = document.getElementById("novoAdmin")

const snapshot = adminsInDB


addButton.addEventListener("click", function(){
    adicionarAdmin()
    clearEmails()
    renderEmails()
})
function adicionarAdmin() {
    const newAdminEmail = newAdmin.value;
  
    // Add the new admin email to the database
    push(adminsInDB, newAdminEmail);
  
  }
  

  