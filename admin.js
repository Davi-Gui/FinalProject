import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
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
        
        // Crie uma nova linha e adicione as células de email e ID a ela
        let linha = document.createElement("tr");
        
        let emailCelula = document.createElement("td");
        emailCelula.textContent = email;
        
        let idCelula = document.createElement("td");
        idCelula.textContent = id;
        
        linha.appendChild(emailCelula);
        linha.appendChild(idCelula);

        // Adicione a linha à tabela
        emailColuna.parentElement.parentElement.appendChild(linha);
      }
    }
  });
}

