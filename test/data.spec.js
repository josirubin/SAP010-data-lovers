import { ordenarAZ } from '../src/data.js';

const arrayTeste = [{
  "name": "Rick",
  "status": "Alive",
  "species": "Human"
},
{
  "name": "Morty",
  "status": "Alive",
  "species": "Human"
},
{
  "name": "Summer",
  "status": "Alive",
  "species": "Human"
}]

describe('ordenar AZ - ZA', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('retornar AZ', () => {
    expect(ordenarAZ('a-z', arrayTeste)).toEqual([{"name": "Morty", "status": "Alive", "species": "Human"}, {"name": "Rick", "status": "Alive", "species": "Human"}, {"name": "Summer", "status": "Alive", "species": "Human"}]);
  
    expect(ordenarAZ('a-z', arrayTeste)[0].name).toBe('Morty');
  });


});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });