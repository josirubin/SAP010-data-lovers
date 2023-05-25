import { ordenarAZ, filtrar } from '../src/data.js';

// const arrayTeste = [
//   {
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//   },
//   {
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//   },
//   {
//     "name": "Summer Smith",
//     "status": "Alive",
//     "species": "Human",
//   }]

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe('filtrar', () => {
  it('deve ser uma função', () => {
    expect(typeof filtrar).toBe('function');
  })
})


describe('ordenarAZ', () => {
  it('deve ser uma função', () => {
    expect(typeof ordenarAZ).toBe('function');
  })
})