"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRestApiServer = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRestApiServer = () => {
  const restApiServer = (0, _express.default)();
  restApiServer.use(_express.default.json());
  restApiServer.use((0, _cors.default)({
    methods: _constants.envConstants.CORS_METHODS,
    origin: _constants.envConstants.CORS_ORIGIN,
    credentials: true
  }));
  restApiServer.use((0, _cookieParser.default)());
  return restApiServer;
};

exports.createRestApiServer = createRestApiServer;