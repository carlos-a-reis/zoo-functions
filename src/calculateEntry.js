const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  if (entrants === 0 || Object.values(entrants).length === 0) return 0;
  const { adult, child, senior } = countEntrants(entrants);
  return adult * prices.adult + child * prices.child + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
