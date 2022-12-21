"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restApi = require("./rest-api.server");

Object.keys(_restApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _restApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _restApi[key];
    }
  });
});

var _db = require("./db.server");

Object.keys(_db).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _db[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _db[key];
    }
  });
});