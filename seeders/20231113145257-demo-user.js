"use strict";

const bcrypt = require("bcrypt");

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
          password: bcrypt.hashSync("1234", 10),
        },
        {
          name: "Maria Faustina Buntaro",
          email: "mariafaustina@gmail.com",
          username: "mariafaustina",
          password: bcrypt.hashSync("2811", 10),
        },
        {
          name: "Brandon Matthew Eldridge",
          email: "brandonmattheweldridge@gmail.com",
          username: "brandonganap",
          password: bcrypt.hashSync("1309", 10),
        },
        {
          name: "Tasya Ponow",
          email: "tasyaponow@gmail.com",
          username: "tasyaponow",
          password: bcrypt.hashSync("0913", 10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
