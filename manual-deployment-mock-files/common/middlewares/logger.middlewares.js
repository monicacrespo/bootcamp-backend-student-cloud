"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logRequestMiddleware = exports.logErrorRequestMiddleware = void 0;

const logRequestMiddleware = async (req, res, next) => {
  console.log(req.url);
  next();
};

exports.logRequestMiddleware = logRequestMiddleware;

const logErrorRequestMiddleware = async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
};

exports.logErrorRequestMiddleware = logErrorRequestMiddleware;