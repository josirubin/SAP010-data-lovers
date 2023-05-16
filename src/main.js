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
