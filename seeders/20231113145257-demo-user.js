"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Bradley Andrew Ercole",
          email: "bradleyandrewercole28@gmail.com",
          username: "bradleyganap",
          password: "1234",
        },
        {
          name: "Maria Faustina Buntaro",
          email: "mariafaustina@gmail.com",
          username: "mariafaustina",
          password: "2811",
        },
        {
          name: "Brandon Matthew Eldridge",
          email: "brandonmattheweldridge@gmail.com",
          username: "brandonganap",
          password: "1309",
        },
        {
          name: "Tasya Ponow",
          email: "tasyaponow@gmail.com",
          username: "tasyaponow",
          password: "0913",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
