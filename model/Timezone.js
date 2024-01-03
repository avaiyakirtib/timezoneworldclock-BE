const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Timezone = sequelize.define("Timezone", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gmtOffset: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gmtOffsetName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Timezone;
