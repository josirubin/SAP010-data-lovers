import { buscarNome, ordenarAZ, filtrar } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const personagens = data.results;
const inputDeBusca = document.querySelector('#input-de-busca');
const selecaoOrdem = document.querySelector('#ordenar');
const selecaoEspecie = document.querySelector('#selecao-especie');
const selecaoStatus = document.querySelector('#selecao-status');
const divSobreASerie = document.querySelector('.container.secundaria');
const divPaginaInicial = document.querySelector('.container');
const btnSobre = document.querySelector('#sobre-serie');

btnSobre.addEventListener('click', function(){
  if(divPaginaInicial.style.display !== 'none'){
    divPaginaInicial.style.display = 'none';
    divSobreASerie.style.display = 'block'}
})

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

selecaoEspecie.addEventListener('change', (event) => {
  const valor = event.target.value;
  const personagensFiltrados = filtrar(personagens, valor, "species");
  return criaCardPersonagens(personagensFiltrados);
})

selecaoStatus.addEventListener('change', (event) => {
  const valor = event.target.value;
  const personagensFiltrados = filtrar(personagens, valor, "status");
  return criaCardPersonagens(personagensFiltrados);
})

