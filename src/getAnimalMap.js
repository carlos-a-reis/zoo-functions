const { species } = require('../data/zoo_data');

const defaultReturn = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const animalsList = (region, sorted, sex) => defaultReturn[region].map((animal) => {
  let result = [];
  const findAnimal = species.find((specie) => specie.name === animal);
  const animalNames = findAnimal.residents.map((animalName) => animalName.name);
  if (sex === 'female' || sex === 'male') {
    result = findAnimal.residents.filter((animalSex) => animalSex.sex === sex)
      .map((resident) => resident.name);
    console.log(result);
  } else {
    result = animalNames;
    console.log(result);
  }
  if (sorted === true) return { [animal]: result.sort() };
  return { [animal]: result };
});

const listReturn = (sorted, sex) => {
  const result = {
    NE: animalsList('NE', sorted, sex),
    NW: animalsList('NW', sorted, sex),
    SE: animalsList('SE', sorted, sex),
    SW: animalsList('SW', sorted, sex),
  };
  return result;
};

function getAnimalMap(options = defaultReturn) {
  if (options === defaultReturn || options.includeNames === undefined) return defaultReturn;
  return listReturn(options.sorted, options.sex);
}

module.exports = getAnimalMap;
