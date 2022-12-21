"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runCommand = void 0;

var _util = require("util");

var _child_process = _interopRequireDefault(require("child_process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const runCommand = async command => {
  console.log(command);
  const {
    stdout,
    stderr
  } = await (0, _util.promisify)(_child_process.default.exec)(command);
  console.log(stdout);
  console.error(stderr);
};

exports.runCommand = runCommand;