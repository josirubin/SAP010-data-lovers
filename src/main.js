import { buscarNome, ordenarAZ } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const personagens = data.results;
const inputDeBusca = document.querySelector('#input-de-busca');
const selecaoOrdem = document.querySelector('#ordenar');

function criaCardPersonagens(personagens) {
  const printarCard = personagens.map((personagens) => {
    const card = `
        <div class = "cards">
             <img src="${personagens.image}" alt="Imagem do personagem">
             <h2>${personagens.name}</h2>
             <div class="filtros">
             <p>Espécie: ${personagens.species}</p>
             <p>Status: ${personagens.status}</p>
             <p>Origem: ${personagens.origin.name}</p>
             </div>
        </div>
        `;
    return card;
  });

  document.querySelector("#card-personagens").innerHTML = printarCard.join("");
}

window.addEventListener('load', () => criaCardPersonagens(personagens))

//função no input para buscar por nome
function filtroNomes() {
  const inputFilter = inputDeBusca.value;
  const filter = buscarNome(personagens, inputFilter);
  return criaCardPersonagens(filter);
}
inputDeBusca.addEventListener('input', filtroNomes)


selecaoOrdem.addEventListener('change', () => {
  const ordemPersonagens = ordenarAZ(selecaoOrdem.value, personagens);
  criaCardPersonagens(ordemPersonagens);
})