"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          task: "Belajar React JS",
          user_id: 1,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar Next JS",
          user_id: 1,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar Express JS",
          user_id: 2,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar Node JS",
          user_id: 2,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar MySQL",
          user_id: 2,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar VueJS",
          user_id: 3,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar AngularJS",
          user_id: 3,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar LitJS",
          user_id: 4,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
        {
          task: "Belajar EmberJS",
          user_id: 4,
          createdAt: newDate().toISOString(),
          updatedAt: newDate().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
