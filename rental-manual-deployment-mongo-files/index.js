"use strict";

var _dotenv = require("dotenv");

// dotenv library to be OS agnostic
// Loads .env file contents into process.env
(0, _dotenv.config)();

require("./app");