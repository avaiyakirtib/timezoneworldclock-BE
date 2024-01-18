const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const City = sequelize.define("City", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  timezone: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  gmtOffset: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tzName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gmtOffsetName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flag:{
    type: DataTypes.STRING,
    // allowNull:false
  }
});

module.exports = City;
