const { species } = require('../data/zoo_data');

const defaultReturn = {};
species.forEach((animal) => {
  defaultReturn[animal.name] = animal.residents.length;
});

function countAnimals(animal = defaultReturn) {
  if (animal === defaultReturn) return defaultReturn;
  if (animal.sex !== undefined) {
    return species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return species.find((specie) => specie.name === animal.specie).residents.length;
}

module.exports = countAnimals;
