const Sequelize = require("sequelize");

module.exports = new Sequelize("jobsearcher", "postgres", "Dbsqja0267!", {
  host: "localhost",
  dialect: "postgres"
});
