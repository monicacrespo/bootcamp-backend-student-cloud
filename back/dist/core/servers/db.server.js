"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnectFromDBServer = exports.db = exports.connectToDBServer = void 0;

var _mongodb = require("mongodb");

let db;
exports.db = db;
let client;

const connectToDBServer = async connectionURI => {
  client = new _mongodb.MongoClient(connectionURI);
  await client.connect();
  exports.db = db = client.db();
};

exports.connectToDBServer = connectToDBServer;

const disconnectFromDBServer = async () => {
  await client.close();
};

exports.disconnectFromDBServer = disconnectFromDBServer;