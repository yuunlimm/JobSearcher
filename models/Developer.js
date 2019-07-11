const Sequelize = require("sequelize");
const db = require("../config/database");

const Developer = db.define("developer", {
  title: {
    type: Sequelize.STRING
  },
  skills: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  first_name: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
});

module.exports = Developer;
