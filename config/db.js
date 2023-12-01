const { config } = require("dotenv");
const { Sequelize } = require("sequelize");

config();
const {DB_NAME, DB_USER, DB_PASSWORD,DB_HOST} = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
});

sequelize.sync({alter: true});

module.exports = sequelize;