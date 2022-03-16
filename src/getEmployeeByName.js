const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = 0) {
  // seu código aqui
  if (employeeName === 0) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
