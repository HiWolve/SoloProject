'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'tomtom@test.com',
        username: 'TomTom',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Tom',
        lastName: 'Tom',
        city: 'Chicago',
        state: 'Illinois'
      },
      {
        email: 'tupacshakur@test.com',
        username: 'Tupac',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Tupac',
        lastName: 'Shakur',
        city: 'Los Angeles',
        state: 'California'      },
      {
        email: 'santaclause@test.com',
        username: 'Santa',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Santa',
        lastName: 'Clause',
        city: 'Maui',
        state: 'Hawaii'      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['TomTom', 'Tupac', 'Santa'] }
    }, {});
  }
};
