const City = require("../model/City");
const Timezone = require("../model/Timezone");
const { Op } = require("sequelize");
const sequelize = require("../config/db");
const Sequelize = require("sequelize");
module.exports.search = async (req, res) => {
  try {
    const search = req.query.search;
    const cities = await City.findAll({
      where: {
        [Op.or]: [
          {
            country: {
              [Op.like]: `${search}%`,
            },
          },
          {
            name: {
              [Op.like]: `${search}%`,
            },
          },
        ],
      },
      order: [
        sequelize.literal(`CASE WHEN country = '${search}' THEN 0 ELSE 1 END`),
      ],
      limit: 5,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully found cities",
      data: cities,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.getTimezone = async (req, res) => {
  try {
    const timezone = await Timezone.findAll({});
    return res.status(200).json({
      success: true,
      message: "Successfully found Timezones",
      data: timezone,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.fromToTimezone = async (req, res) => {
  try {
    console.log(req.body);
    const { From, To } = req.body;
    const timezone = await Timezone.findAll({
      where: {
        [Op.or]: [{ name: From }, { name: To }],
      },
    });
    return res.status(200).json({
      success: true,
      message: "Successfully found Timezones",
      data: timezone,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findByPk(id);
    if (city) {
      return res.status(200).json({
        success: true,
        message: "Successfully found city",
        data: city,
      });
    } else {
      return res.status(404).json({
        success: true,
        message: "City not found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
