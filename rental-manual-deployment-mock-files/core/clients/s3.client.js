"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s3Client = void 0;

var _clientS = require("@aws-sdk/client-s3");

const s3Client = new _clientS.S3Client({
  region: 'eu-west-2'
});
exports.s3Client = s3Client;