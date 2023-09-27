function mostrarCarregamento()
{
    let teste = document.getElementById("carregando")
    let icone = document.createElement("div")
    
    icone.setAttribute("class","loader")

    teste.appendChild(icone)

    
}

function esconderCarregamento() {
    const icones = document.getElementsByClassName("loader");
    
    // Convertemos a coleção em um array para poder iterar sobre ela
    const iconesArray = Array.from(icones);
    
    // Iteramos sobre os elementos e os removemos do DOM
    iconesArray.forEach(function(icone) {
        icone.remove();
    });
}
/*
<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
*/