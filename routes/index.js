const { Router } = require("express");
const {
  search,
  getTimezone,
  fromToTimezone,
  getCity,
} = require("../controller/timeController");
const route = Router();

route.get('/search/', search);

route.get('/timezone', getTimezone);

route.post('/timezone', fromToTimezone)

route.get('/city/:id', getCity);

module.exports = route;