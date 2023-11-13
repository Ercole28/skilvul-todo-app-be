"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          task: "Belajar React JS",
          user_id: 1
        },
        {
          task: "Belajar Next JS",
          user_id: 1
        },
        {
          task: "Belajar Express JS",
          user_id: 2
        },
        {
          task: "Belajar Node JS",
          user_id: 2
        },
        {
          task: "Belajar MySQL",
          user_id: 2
        },
        {
          task: "Belajar VueJS",
          user_id: 3
        },
        {
          task: "Belajar AngularJS",
          user_id: 3
        },
        {
          task: "Belajar LitJS",
          user_id: 4
        },
        {
          task: "Belajar EmberJS",
          user_id: 4
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
