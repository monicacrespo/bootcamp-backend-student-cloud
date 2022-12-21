"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _inquirer = require("inquirer");

var _consoleRunners = require("./console-runners.helpers");

const seedDataContainerPath = '/opt/app';

const run = async () => {
  const {
    seedDataPath,
    containerName,
    dbName
  } = await (0, _inquirer.prompt)([{
    name: 'seedDataPath',
    type: 'input',
    message: 'Seed data path (in your file system):'
  }, {
    name: 'containerName',
    type: 'input',
    message: 'Docker container name:'
  }, {
    name: 'dbName',
    type: 'input',
    message: 'Database name:'
  }]);
  const copySeedDataCommand = `docker cp "${seedDataPath}" ${containerName}:${seedDataContainerPath}`;
  const restoreBackupCommand = `docker exec ${containerName} mongorestore --db ${dbName} ${seedDataContainerPath}`;
  await (0, _consoleRunners.runCommand)(copySeedDataCommand);
  await (0, _consoleRunners.runCommand)(restoreBackupCommand);
};

exports.run = run;