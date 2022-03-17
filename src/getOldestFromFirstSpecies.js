const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === animalId).residents;
  const maxAge = Math.max(...animals.map((animal) => animal.age));
  const olderAnimal = animals.find((animal) => animal.age === maxAge);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
