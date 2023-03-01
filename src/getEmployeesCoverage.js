const { employees, species } = require('../data/zoo_data');

const firstNames = employees.map((employee) => employee.firstName);
const lastNames = employees.map((employee) => employee.lastName);

const covarageGenerator = (employee, animals, animalsLocations) => {
  const result = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animals,
    locations: animalsLocations,
  };
  return result;
};

const defaultReturn = () => {
  const employeesList = firstNames.map((name) => employees.find((person) =>
    person.firstName === name));
  const animals = employeesList.map((employee) => employee.responsibleFor.map((animalId) =>
    species.find((specie) => specie.id === animalId).name));
  const animalsLocations = animals.map((animalArray) => animalArray.map((animal) =>
    species.find((specie) => specie.name === animal).location));
  const result = [];
  employees.forEach((employee, index) => {
    result.push(covarageGenerator(employee, animals[index], animalsLocations[index]));
  });
  return result;
};

const returnEmployee = (identification) => {
  if (identification.id !== undefined) {
    return employees.find((person) => person.id === identification.id);
  }
  if (firstNames.some((name) => name === identification.name)) {
    return employees.find((person) => person.firstName === identification.name);
  }
  if (lastNames.some((name) => name === identification.name)) {
    return employees.find((person) => person.lastName === identification.name);
  }
};

function getEmployeesCoverage(identification = 0) {
  if (identification === 0) return defaultReturn();

  const employee = returnEmployee(identification);

  if (employee === undefined) throw new Error('Informações inválidas');

  const animals = employee.responsibleFor.map((animalId) => species.find((specie) =>
    specie.id === animalId).name);
  const animalsLocations = animals.map((animal) => species.find((specie) =>
    specie.name === animal).location);

  return covarageGenerator(employee, animals, animalsLocations);
}

module.exports = getEmployeesCoverage;
