const { config } = require("dotenv");
const express = require("express");
config();

const { PORT } = process.env;
const server = express();

server.use(require('./routes'))

server.listen(PORT);
