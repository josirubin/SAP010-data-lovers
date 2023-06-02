import { ordenarAZ, filtrar, calcularPorcentagem, buscarNome } from '../src/data.js';

const arrayTeste = [{
  "name": "Diane Sanchez",
  "status": "unknown",
  "species": "Human"
},
{
  "name": "Adjudicator Rick",
  "status": "Dead",
  "species": "Human"
},
{
  "name": "Daron Jefferson",
  "status": "Alive",
  "species": "Alien"
}]

//testa ordenação AZ
describe('ordenar AZ - ZA', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('retornar AZ', () => {
    expect(ordenarAZ('a-z', arrayTeste)).toEqual([{"name": "Adjudicator Rick", "status": "Dead", "species": "Human"}, {"name": "Daron Jefferson", "status": "Alive", "species": "Alien"}, {"name": "Diane Sanchez", "status": "unknown", "species": "Human"}]);
  
    expect(ordenarAZ('a-z', arrayTeste)[0].name).toBe('Adjudicator Rick');
  });
});

//testa ordenação ZA
describe('ordenar AZ - ZA', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('retornar ZA', () => {
    expect(ordenarAZ('z-a', arrayTeste)).toEqual([{"name": "Diane Sanchez", "status": "unknown", "species": "Human"}, {"name": "Daron Jefferson", "status": "Alive", "species": "Alien"}, {"name": "Adjudicator Rick", "status": "Dead", "species": "Human"}]);
  });
});

//testa filtro por status
describe('Filtrar por Status', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('retornar os personagens por status', () => {
    expect(filtrar(arrayTeste, 'unknown', "status")).toEqual([{"name": "Diane Sanchez", "status": "unknown", "species": "Human"}]);
    expect(filtrar(arrayTeste, 'alive', "status")).toEqual([{"name": "Daron Jefferson", "status": "Alive", "species": "Alien"}]);
    expect(filtrar(arrayTeste, 'dead', "status")).toEqual([{"name": "Adjudicator Rick", "status": "Dead", "species": "Human"}]);
  });
});

//testa o cálculo
describe('Calculo agregado', () => {
  it('is a function', () => {
    expect(typeof calcularPorcentagem).toBe('function');
  });

  it('retornar o cálculo de porcentagem referente a human', () => {
    expect(calcularPorcentagem(3, 2)).toBe(67)
  })
});


describe('Busca por nome', () => {
  it('is a function', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('busca por nome', () => {
    expect(buscarNome(arrayTeste, 'Diane')).toEqual([{"name": "Diane Sanchez", "status": "unknown", "species": "Human"}])
  })
})