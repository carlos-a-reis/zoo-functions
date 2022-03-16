const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  // seu código aqui
  return (id === stephanieId || id === olaId || id === burlId);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  try {
    if (isManager(managerId)) {
      const managedEmployee = employees.filter((employee) => employee.managers
        .some((manager) => manager === managerId));
      return managedEmployee.map((employee) => `${employee.firstName} ${employee.lastName}`);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
