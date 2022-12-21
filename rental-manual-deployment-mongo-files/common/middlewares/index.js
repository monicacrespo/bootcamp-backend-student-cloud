"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require("./logger.middlewares");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _logger[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});