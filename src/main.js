import { buscarNome, ordenarAZ, filtrar, calcularPorcentagem } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const personagens = data.results;
const inputDeBusca = document.querySelector('#input-de-busca');
const selecaoOrdem = document.querySelector('#ordenar');
const selecaoEspecie = document.querySelector('#selecao-especie');
const selecaoStatus = document.querySelector('#selecao-status');
const divSobreASerie = document.querySelector('.container.secundaria');
const divPaginaInicial = document.querySelector('.container');
const btnSobre = document.querySelector('#sobre-serie');
const porcentagem = document.querySelector('#porcentagem');

//mudança de página
btnSobre.addEventListener('click', function () {
  if (divPaginaInicial.style.display !== 'none') {
    divPaginaInicial.style.display = 'none';
    divSobreASerie.style.display = 'block'
  }
})

//criação cards
function criaCardPersonagens(personagens) {
  const printarCard = personagens.map((personagens) => {
    const card = `
        <div class = "cards">
             <img src="${personagens.image}" alt="Charactere's image">
             <h2>${personagens.name}</h2>
             <div class="filtros">
             <p>Specie: ${personagens.species}</p>
             <p>Status: ${personagens.status}</p>
             <p>Location: ${personagens.location.name}</p>
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
  const filtroNome = buscarNome(personagens, inputFilter);
  criaCardPersonagens(filtroNome);

  const calculoPorcentagem = calcularPorcentagem(personagens.length, filtroNome.length)
  porcentagem.innerHTML = "This <span>search</span> represents " + calculoPorcentagem + "% of characteres."
}
inputDeBusca.addEventListener('input', filtroNomes)

//ordenação AZ - ZA
selecaoOrdem.addEventListener('change', () => {
  const ordemPersonagens = ordenarAZ(selecaoOrdem.value, personagens);
  criaCardPersonagens(ordemPersonagens);
})

//filtro espécies
selecaoEspecie.addEventListener('change', (event) => {
  selecaoStatus.value = ""; //zera caso houver uma outra seleção no outro select
  const valor = event.target.value;
  const personagensFiltrados = filtrar(personagens, valor, "species");
  criaCardPersonagens(personagensFiltrados);

  const calculoPorcentagem = calcularPorcentagem(personagens.length, personagensFiltrados.length)
  porcentagem.innerHTML = "This <span>specie</span> represents " + calculoPorcentagem + "% of characteres."
})

//filtro status
selecaoStatus.addEventListener('change', (event) => {
  selecaoEspecie.value = ""; //zera caso houver uma outra seleção no outro select
  const valor = event.target.value;
  const personagensFiltrados = filtrar(personagens, valor, "status");
  criaCardPersonagens(personagensFiltrados);

  const calculoPorcentagem = calcularPorcentagem(personagens.length, personagensFiltrados.length)
  porcentagem.innerHTML = "This <span>status</span> represents " + calculoPorcentagem + "% of characteres."
})

