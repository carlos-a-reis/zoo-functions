const { hours: { Tuesday, Wednesday, Thursday,
  Friday, Saturday, Sunday } } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const defaultReturn = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const scheduleGenerator = (schedule) => {
  if (days.some((day) => day === schedule)) return { [schedule]: defaultReturn[schedule] };
  return species.find((specie) => specie.name === schedule).availability;
};

function getSchedule(scheduleTarget = defaultReturn) {
  // seu código aqui
  if (scheduleTarget === defaultReturn) return defaultReturn;
  if (!species.some((animal) => animal.name === scheduleTarget)
    && !days.some((day) => day === scheduleTarget)) return defaultReturn;
  return scheduleGenerator(scheduleTarget);
}

module.exports = getSchedule;
