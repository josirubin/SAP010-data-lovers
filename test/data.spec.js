import { ordenarAZ, filtrar } from '../src/data.js';

const rick = {
  "name": "Rick",
  "status": "Alive",
  "species": "Human"
}

const morty = {
  "name": "Morty",
  "status": "Alive",
  "species": "Human"
}

const summer = {
  "name": "Summer",
  "status": "Alive",
  "species": "Human"
}

const arrayTeste = [morty, rick, summer];
const arrayTeste2 = [summer, rick, morty];

describe('filtrar', () => {
  it('deve ser uma função', () => {
    expect(typeof filtrar).toBe('function');
  })
})


describe('Ordernar em ordem alfabetica', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('Ordenar de a-z e z-a', () => {
    const ordenarAZ = "a-z"
    const ordenarZA = "z-a"

    expect(ordenarAZ(ordenarAZ, arrayTeste)).toEqual([morty, rick, summer]);
    expect(ordenarAZ(ordenarZA, arrayTeste)).toEqual([summer, rick, morty]);

    expect(ordenarAZ(ordenarAZ, arrayTeste2)).toEqual([morty, rick, summer]);
    expect(ordenarAZ(ordenarZA, arrayTeste2)).toEqual([summer, rick, morty]);

  });
});