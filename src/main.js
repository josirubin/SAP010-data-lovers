// import {filtrar} from './data'
import data from './data/rickandmorty/rickandmorty.js';

const personagens = data.results;

criaCardPersonagens(personagens);

function criaCardPersonagens(personagens) {
    const printarCard = personagens.map((personagens) => {
        const card = `
        <div class = "cards">
             <img src="${personagens.image}" alt="Imagem do personagem">
             <h2>${personagens.name}</h2>
             <div class="filtros">
             <p>Espécie: ${personagens.species}</p>
             <p>Status: ${personagens.status}</p>
             </div>
        </div>
        `;
        return card;
    });

    document.querySelector("#card-personagens").innerHTML = printarCard.join("");
}


// PASSAGEM AUTOMATICA SLIDE

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if (count > 2) {
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}