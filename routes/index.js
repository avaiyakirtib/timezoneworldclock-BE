const { Router } = require("express");
const { search } = require("../controller/timeController");

const route = Router();

route.get('/search/', search);

module.exports = route;