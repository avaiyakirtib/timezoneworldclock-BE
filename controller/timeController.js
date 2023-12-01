const City = require('../model/City')
const {Op} = require('sequelize')
module.exports.search = async (req, res) => {
  try {
    const search = req.query.search;
    const cities = await City.findAll({
      where: {
        name: {
          [Op.like]: `%${search}%`,
        },
      },
      limit: 5,
    });
    return res.status(200).json({
        success: true,
        message: 'Successfully found cities',
        data: cities,
    });
  } catch (err) {
    console.log(err)
    return res.status(400).json({
        success: false,
        message: 'Something went wrong',
    })
  }
};
